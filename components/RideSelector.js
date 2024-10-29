import Image from 'next/image'
import ethLogo from '../assets/eth-logo.png'
import { useEffect, useContext, useState } from 'react'
import { RideContext } from '../context/RideContext'

const style = {
  wrapper: `h-full flex flex-col border-2`,
  title: `text-gray-500 text-center text-xs md:text-sm py-2 border-b`, // Increased font size for larger screens
  carList: `flex flex-col flex-1 overflow-scroll`,
  car: `flex p-2 md:p-3 m-1 md:m-2 items-center border-2 border-white`, // Adjusted padding and margin for smaller screens
  selectedCar: `border-2 border-black flex p-2 md:p-3 m-1 md:m-2 items-center`, // Same as above
  carImage: `h-12 md:h-14`, // Adjusted image height for smaller screens
  carDetails: `ml-1 md:ml-2 flex-1`, // Reduced margin for smaller screens
  service: `font-medium text-xs md:text-sm`, // Adjusted font size
  time: `text-[10px] md:text-xs text-blue-500`, // Adjusted font size
  priceContainer: `flex items-center`,
  price: `mr-[-0.5rem] md:mr-[-0.8rem]`, // Adjusted margin for smaller screens
}

const RideSelector = () => {
  const [carList, setCarList] = useState([])
  const { selectedRide, setSelectedRide, setPrice, basePrice } =
    useContext(RideContext)

  console.log(basePrice)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch('/api/db/getRideTypes')

        const data = await response.json()
        setCarList(data.data)
        setSelectedRide(data.data[0])
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <div className={style.wrapper}>
      {/* <h1 className='border-2 text-lg'>ByeBug</h1> */}
      <div className={style.title}>Choose a ride, or swipe up for more</div>
      <div className={style.carList}>
        {carList.map((car, index) => (
          <div
            key={index}
            className={`${
              selectedRide.service === car.service
                ? style.selectedCar
                : style.car
            }`}
            onClick={() => {
              setSelectedRide(car)
              setPrice(((basePrice / 10 ** 6) * car.priceMultiplier).toFixed(5))
            }}
          >
            <Image
              src={car.iconUrl}
              className={style.carImage}
              height={50}
              width={50}
              alt='image'
            />
            <div className={style.carDetails}>
              <div className={style.service}>{car.service}</div>
              <div className={style.time}>5 min away</div>
            </div>
            <div className={style.priceContainer}>
              <div className={style.price}>
                {((basePrice / 10 ** 6) * car.priceMultiplier).toFixed(5)}
              </div>
              <Image src={ethLogo} height={25} width={40}  alt='image'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RideSelector
