"use client"

import { createContext, useState } from 'react'

export const RideContext = createContext(null)

export const RideProvider = ({ children }) => {
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [pickupCoordinates, setPickupCoordinates] = useState()
  const [dropoffCoordinates, setDropoffCoordinates] = useState()
  const [currentAccount, setCurrentAccount] = useState()
  const [price, setPrice] = useState()
  const [selectedRide, setSelectedRide] = useState({})
  const [metamask, setMetamask] = useState()

  const value = {
    pickup,
    setPickup,
    dropoff,
    setDropoff,
    pickupCoordinates,
    setPickupCoordinates,
    dropoffCoordinates,
    setDropoffCoordinates,
    currentAccount,
    setCurrentAccount,
    price,
    setPrice,
    selectedRide,
    setSelectedRide,
    metamask,
    setMetamask,
  }

  return (
    <RideContext.Provider value={value}>
      {children}
    </RideContext.Provider>
  )
}
