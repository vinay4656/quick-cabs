'use client'

import { useState, useContext } from 'react'
import { RideContext } from '../context/RideContext'
import mapboxSdk from '@mapbox/mapbox-sdk/services/geocoding'

const LocationSelector = () => {
  const [inFocus, setInFocus] = useState('from')
  const context = useContext(RideContext)
  
  if (!context) {
    return <div>Loading...</div>
  }

  const { pickup, setPickup, dropoff, setDropoff } = context
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
