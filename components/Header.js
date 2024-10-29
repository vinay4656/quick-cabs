import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white text-black font-jeko shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        <div className="flex items-center space-x-4">
          <Image 
            src="/images/logo.svg"
            alt="QuickCabs Logo"
            width={180}
            height={40}
            className="inline-block"
          />
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="/login" legacyBehavior>
            <button className="transition duration-300 text-black hover:text-gray-500 hover:underline focus:outline-none">
              Log in
            </button>
          </Link>
          <Link href="/signup" legacyBehavior>
            <button className="bg-[#CCFF00] text-black px-6 py-2 rounded transition duration-300 hover:bg-[#A5CD1B] hover:text-white focus:outline-none">
              Sign up
            </button>
          </Link>
        </div>
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white p-4">
          <Link href="/login" legacyBehavior>
            <button className="block text-black transition duration-300 hover:text-gray-500 py-2 hover:underline focus:outline-none">
              Log in
            </button>
          </Link>
          <Link href="/signup" legacyBehavior>
            <button className="block bg-[#CCFF00] text-black px-6 py-2 rounded transition duration-300 hover:bg-green-500 hover:text-white focus:outline-none">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
