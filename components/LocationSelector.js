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
    <div className="wrapper">
      <div className="searchHeader">
        {inFocus === 'from' ? 'Where can we pick you up?' : 'Where to?'}
      </div>
      <div className="inputBoxes">
        <div
          className={`inputBox ${
            inFocus === 'from' ? 'focusedInputBox' : ''
          }`}
        >
          <div className="svgContainer">
            <svg viewBox='0 0 24 24' width='1em' height='1em'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0z'
              />
            </svg>
          </div>
          <input
            className="input"
            placeholder='Enter pickup location'
            value={pickup}
            onChange={e => {
              setPickup(e.target.value)
              handleInputChange(e.target.value, 'from')
            }}
            onFocus={() => setInFocus('from')}
          />
          {pickupSuggestions.length > 0 && (
            <div className="suggestions">
              {pickupSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestionItem"
                  onClick={() => handleSuggestionClick(suggestion, 'from')}
                >
                  {suggestion.place_name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="verticalLine" />
        <div
          className={`inputBox ${
            inFocus === 'to' ? 'focusedInputBox' : ''
          }`}
        >
          <div className="svgContainer">
            <svg viewBox='0 0 24 24' width='1em' height='1em'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14 10h-4v4h4v-4zM7 7v10h10V7H7z'
              />
            </svg>
          </div>
          <input
            className="input"
            placeholder='Where to?'
            value={dropoff}
            onChange={e => {
              setDropoff(e.target.value)
              handleInputChange(e.target.value, 'to')
            }}
            onFocus={() => setInFocus('to')}
          />
          {dropoffSuggestions.length > 0 && (
            <div className="suggestions">
              {dropoffSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestionItem"
                  onClick={() => handleSuggestionClick(suggestion, 'to')}
                >
                  {suggestion.place_name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          border-radius: 8px;
          padding: 24px;
          background-color: white;
        }

        .searchHeader {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .inputBoxes {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .inputBox {
          display: flex;
          align-items: center;
          background-color: #f5f5f5;
          padding: 12px;
          border-radius: 4px;
          position: relative;
        }

        .focusedInputBox {
          background-color: #eee;
          border: 1px solid #000;
        }

        .svgContainer {
          margin-right: 12px;
        }

        .input {
          flex: 1;
          border: none;
          background: none;
          outline: none;
          font-size: 1rem;
        }

        .verticalLine {
          width: 1px;
          height: 24px;
          background-color: #e0e0e0;
          margin: 0 auto;
        }

        .suggestions {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: white;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          margin-top: 4px;
          max-height: 200px;
          overflow-y: auto;
          z-index: 10;
        }

        .suggestionItem {
          padding: 12px;
          cursor: pointer;
        }

        .suggestionItem:hover {
          background-color: #f5f5f5;
        }
      `}</style>
    </div>
  )
}

export default LocationSelector
