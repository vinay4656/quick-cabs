import { useState, useContext, useEffect } from 'react'
import { RideContext } from '../context/RideContext'
import mapboxSdk from '@mapbox/mapbox-sdk/services/geocoding'

const style = {
  wrapper: `pt-2`,
  searchHeader: `w-full font-bold text-left flex items-center text-2xl sm:text-3xl p-4 overflow-hidden`, // Adjust text size
  inputBoxes: `flex flex-col mb-4 relative`,
  inputBox: `h-12 sm:h-14 mx-4 border-2 bg-[#eeeeee] flex items-center my-1 py-1 px-2`, // Increased height from h-8/h-10 to h-12/h-14
  focusedInputBox: `border-[#B7E41F]`,
  svgContainer: `mx-1`,
  input: `my-2 rounded-2 p-2 outline-none border-none bg-transparent h-full w-full`,
  verticalLine: `w-0 h-[2rem] sm:h-[2.5rem] border-black border absolute z-10 left-[2.3rem] top-[2rem]`, // Adjusted vertical line height to match
  suggestions: `absolute bg-white z-10 w-full top-[100%] mt-1 shadow-lg rounded-lg max-h-40 overflow-y-auto text-sm left-0`,
  suggestionItem: `p-2 hover:bg-gray-200 cursor-pointer text-sm`,
}


const LocationSelector = () => {
  const [inFocus, setInFocus] = useState('from')
  const { pickup, setPickup, dropoff, setDropoff } = useContext(RideContext)
  const [pickupSuggestions, setPickupSuggestions] = useState([])
  const [dropoffSuggestions, setDropoffSuggestions] = useState([])

  const geocodingClient = mapboxSdk({ accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN })

  const handleInputChange = async (value, type) => {
    if (value.length > 2) { // Only fetch suggestions if more than 2 characters are typed
      const response = await geocodingClient.forwardGeocode({
        query: value,
        countries: ['IN'], // Restrict results to India
        limit: 5,          // Limit the number of suggestions
      }).send()

      const suggestions = response.body.features.map(feature => ({
        place_name: feature.place_name,
        coordinates: feature.geometry.coordinates
      }))

      if (type === 'from') {
        setPickupSuggestions(suggestions)
      } else {
        setDropoffSuggestions(suggestions)
      }
    }
  }

  const handleSuggestionClick = (suggestion, type) => {
    if (type === 'from') {
      setPickup(suggestion.place_name)
      setPickupSuggestions([]) // Clear suggestions after selection
    } else {
      setDropoff(suggestion.place_name)
      setDropoffSuggestions([]) // Clear suggestions after selection
    }
  }

  return (
    <div className={style.wrapper}>
      <div className={style.searchHeader}>
        {inFocus === 'from' ? 'Where can we pick you up?' : 'Where to?'}
      </div>
      <div className={style.inputBoxes}>
        <div
          className={`${style.inputBox} ${
            inFocus === 'from' && style.focusedInputBox
          }`}
        >
          <div className={style.svgContainer}>
            <svg viewBox='0 0 24 24' width='1em' height='1em'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0z'
              />
            </svg>
          </div>
          <input
            className={style.input}
            placeholder='Enter pickup location'
            value={pickup}
            onChange={e => {
              setPickup(e.target.value)
              handleInputChange(e.target.value, 'from')
            }}
            onFocus={() => setInFocus('from')}
          />
          {pickupSuggestions.length > 0 && (
            <div className={style.suggestions}>
              {pickupSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className={style.suggestionItem}
                  onClick={() => handleSuggestionClick(suggestion, 'from')}
                >
                  {suggestion.place_name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={style.verticalLine} />
        <div
          className={`${style.inputBox} ${
            inFocus === 'to' && style.focusedInputBox
          }`}
        >
          <div className={style.svgContainer}>
            <svg viewBox='0 0 24 24' width='1em' height='1em'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14 10h-4v4h4v-4zM7 7v10h10V7H7z'
              />
            </svg>
          </div>
          <input
            className={style.input}
            placeholder='Where to?'
            value={dropoff}
            onChange={e => {
              setDropoff(e.target.value)
              handleInputChange(e.target.value, 'to')
            }}
            onFocus={() => setInFocus('to')}
          />
          {dropoffSuggestions.length > 0 && (
            <div className={style.suggestions}>
              {dropoffSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className={style.suggestionItem}
                  onClick={() => handleSuggestionClick(suggestion, 'to')}
                >
                  {suggestion.place_name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LocationSelector
