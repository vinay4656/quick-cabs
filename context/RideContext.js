"use client"

import { createContext, useState, useEffect } from 'react'

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

  const createLocationCoordinatePromise = (locationName, locationType) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('api/map/getLocationCoordinates', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            location: locationName,
          }),
        })

        const data = await response.json()

        if (data.message === 'success') {
          switch (locationType) {
            case 'pickup':
              setPickupCoordinates(data.data)
              break
            case 'dropoff':
              setDropoffCoordinates(data.data)
              break
          }
          resolve()
        } else {
          reject()
        }
      } catch (error) {
        console.error(error)
        reject()
      }
    })
  }


  useEffect(() => {
    if (!pickupCoordinates || !dropoffCoordinates) return
    ;(async () => {
      try {
        const response = await fetch('/api/map/getDuration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            pickupCoordinates: `${pickupCoordinates[0]},${pickupCoordinates[1]}`,
            dropoffCoordinates: `${dropoffCoordinates[0]},${dropoffCoordinates[1]}`,
          }),
        })

        const data = await response.json()
        setBasePrice(Math.round(await data.data))
      } catch (error) {
        console.error(error)
      }
    })()
  }, [pickupCoordinates, dropoffCoordinates])

  useEffect(() => {
    if (pickup && dropoff) {
      ;(async () => {
        await Promise.all([
          createLocationCoordinatePromise(pickup, 'pickup'),
          createLocationCoordinatePromise(dropoff, 'dropoff'),
        ])
      })()
    } else return
  }, [pickup, dropoff])

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
