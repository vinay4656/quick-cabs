import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2 font-jeko">QuickCabs</h2>
            <p className="max-w-md text-sm text-gray-400">
              Request a ride, hop in, and go and don't worry about the inaccurate prices cause it's decentralised
            </p>
          </div>
          <div className="flex space-x-12 md:space-x-24">
            <div>
              <h3 className="text-lg font-semibold mb-4 font-jeko">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/blog" className="text-sm text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link href="/partners" className="text-sm text-gray-400 hover:text-white">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-jeko">Solutions</h3>
              <ul className="space-y-2">
                <li><Link href="/marketing" className="text-sm text-gray-400 hover:text-white">Marketing</Link></li>
                <li><Link href="/analytics" className="text-sm text-gray-400 hover:text-white">Analytics</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-jeko">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/claim" className="text-sm text-gray-400 hover:text-white">Claim</Link></li>
                <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 md:mt-0 flex justify-center w-full md:w-auto">
            <Image 
              src="/images/" 
              alt="Footer Image"
              width={300} 
              height={300} 
              className="rounded-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
