import Image from 'next/image'
import avatar from '../temp/avatar.jpg'
import { BsPerson } from 'react-icons/bs'
import { useContext } from 'react'
import { RideContext } from '../context/RideContext'

const style = {
  wrapper: `h-16 w-full bg-white text-black flex flex-col md:flex-row md:justify-around items-center px-4 md:px-60 fixed z-20`,
  leftMenu: `flex gap-2 md:gap-3`,  // Reduced gap for smaller screens
  logo: `text-2xl md:text-3xl text-black flex cursor-pointer mr-4 md:mr-16`, // Adjusted logo size and margin
  menuItem: `text-base md:text-lg text-black font-medium flex items-center mx-2 md:mx-4 cursor-pointer`, // Adjusted text size and margin
  rightMenu: `flex gap-2 md:gap-3 items-center`, // Reduced gap for smaller screens
  userImageContainer: `mr-2`,
  userImage: `h-8 w-8 md:h-10 md:w-10 mr-2 rounded-full p-px object-cover cursor-pointer`, // Adjusted image size
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#f5f5f5] px-3 md:px-4 py-1`, // Adjusted padding
  loginText: `ml-1 md:ml-2`, // Adjusted margin
}

const Navbar = () => {
  const { currentAccount, connectWallet, currentUser } = useContext(RideContext)

  return (
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
        <div className={style.logo}>QuickCabs</div>
        <div className={style.menuItem}>Ride</div>
        <div className={style.menuItem}>Schedule</div>
        <div className={style.menuItem}>More</div>
      </div>
      <div className={style.rightMenu}>
        <div className={style.menuItem}>Help</div>
        <div className={style.menuItem}>{currentUser?.name ? currentUser.name.split(' ')[0] : 'Guest'}</div>
        <div className={style.userImageContainer}>
          <Image
            className={style.userImage}
            src={avatar}
            width={40}
            height={40}
          />
        </div>
        {currentAccount ? (
          <div>
            {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
          </div>
        ) : (
          <div className={style.loginButton} onClick={() => connectWallet()}>
            <BsPerson />
            <span className={style.loginText}>Log in</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
