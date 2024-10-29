"use client"

import { createContext, useState } from 'react'

export const RideContext = createContext({
  pickup: '',
  setPickup: () => {},
  dropoff: '',
  setDropoff: () => {},
  pickupCoordinates: null,
  setPickupCoordinates: () => {},
  dropoffCoordinates: null,
  setDropoffCoordinates: () => {},
  currentAccount: null,
  setCurrentAccount: () => {},
  price: '',
  setPrice: () => {},
  selectedRide: {},
  setSelectedRide: () => {},
  metamask: null,
  setMetamask: () => {},
  currentUser: null,
  setCurrentUser: () => {},
  connectWallet: () => {},
  basePrice: '0',
  setBasePrice: () => {}
})

export const RideProvider = ({ children }) => {
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [pickupCoordinates, setPickupCoordinates] = useState(null)
  const [dropoffCoordinates, setDropoffCoordinates] = useState(null)
  const [currentAccount, setCurrentAccount] = useState(null)
  const [price, setPrice] = useState('')
  const [selectedRide, setSelectedRide] = useState({})
  const [metamask, setMetamask] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  const [basePrice, setBasePrice] = useState('0')

  const connectWallet = async () => {
    try {
      if (!window.ethereum) return alert('Please install MetaMask')
      
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      
      setCurrentAccount(accounts[0])
      setMetamask(window.ethereum)
    } catch (error) {
      console.error(error)
    }
  }

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
    currentUser,
    setCurrentUser,
    connectWallet,
    basePrice,
    setBasePrice
  }

  return (
    <RideContext.Provider value={value}>
      {children}
    </RideContext.Provider>
  )
}
