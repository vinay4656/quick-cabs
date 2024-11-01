import Image from 'next/image'
import avatar from '../temp/avatar.jpg'
import { BsPerson } from 'react-icons/bs'
import { useContext } from 'react'
import { RideContext } from '../context/RideContext'
import logoImage from '../temp/logo.svg'

const style = {
  wrapper: `h-16 w-full bg-white text-black flex flex-col md:flex-row md:justify-start items-center px-4 md:px-60 fixed z-20`,
  leftMenu: `flex gap-2 md:gap-3 flex-1`,
  logo: `h-12 md:h-14 flex cursor-pointer mr-4 md:mr-16`,
  menuItem: `text-sm md:text-base text-black font-normal flex items-center mx-2 md:mx-4 cursor-pointer hover:border-b-2 hover:border-[#F3FFCB] transition-all`,
  activeMenuItem: `text-sm md:text-base text-black font-normal flex items-center mx-2 md:mx-4 cursor-pointer border-b-2 border-[#C1F11D]`,
  rightMenu: `flex gap-2 md:gap-3 items-center`,
  userImageContainer: `mr-2`,
  userImage: `h-8 w-8 md:h-10 md:w-10 mr-2 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#f5f5f5] px-3 md:px-4 py-1`,
  loginText: `ml-1 md:ml-2`,
}

const Navbar = () => {
  const { currentAccount, connectWallet, currentUser } = useContext(RideContext)

  return (
    <div className={style.wrapper}>
      <div className={style.leftMenu}>
        <div className={style.logo}>
          <Image
            src={logoImage}
            alt="QuickCabs Logo"
            height={40}
            width={120}
            // objectFit="contain"
          />
        </div>
        <div className={style.menuItem}>Ride History</div>
        <div className={style.menuItem}>Transactions</div>
        <div className={style.menuItem}>More</div>
      </div>
      <div className={style.rightMenu}>
        <div className={style.menuItem}>Help</div>
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
