import RideSelector from './RideSelector'
import { useContext } from 'react'
import { RideContext } from '../context/RideContext'
import { ethers } from 'ethers'

const style = {
  wrapper: `flex-1 h-full flex flex-col justify-between`,
  rideSelectorContainer: `h-full flex flex-col overflow-scroll`,
  confirmButtonContainer: `border-t-2 cursor-pointer z-10`,
  confirmButton: `bg-[#B7E41F] text-black m-2 py-2 text-center text-lg 
                  sm:m-4 sm:py-3 sm:text-xl
                  hover:bg-[#9bc219] transition-colors duration-200`, // Added hover effect
}


const Confirm = () => {
  const {
    currentAccount,
    pickup,
    dropoff,
    price,
    selectedRide,
    pickupCoordinates,
    dropoffCoordinates,
    metamask,
  } = useContext(RideContext)

  const storeTripDetails = async (pickup, dropoff) => {
    try {
      // await fetch('/api/db/saveTrips', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     pickupLocation: pickup,
      //     dropoffLocation: dropoff,
      //     userWalletAddress: currentAccount,
      //     price: price,
      //     selectedRide: selectedRide,
      //   }),
      // })

      // await metamask.request({
      //   method: 'eth_sendTransaction',
      //   params: [
      //     {
      //       from: currentAccount,
      //       to: process.env.NEXT_PUBLIC_QuickCabs_ADDRESS,
      //       gas: '0x7EF40', // 520000 Gwei
      //       value: ethers.utils.parseEther(price)._hex,
      //     },
      //   ],
      // })
    } catch (error) {
      console.error(error)
    }
  }

  console.log({ pickup, dropoff, price, selectedRide });
  console.log(pickupCoordinates, dropoffCoordinates);

  return (
    <div className={style.wrapper}>
      <div className={style.rideSelectorContainer}>
        {pickupCoordinates && dropoffCoordinates && <RideSelector />}
      </div>
      <div className={style.confirmButtonContainer}>
        <div className={style.confirmButtonContainer}>
          <div
            className={style.confirmButton}
            onClick={() => storeTripDetails(pickup, dropoff)}
          >
            Confirm {selectedRide.service || 'Ride'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
