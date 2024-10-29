import Image from 'next/image';
import Link from 'next/link';

export default function Blockchain() {
  return (
    <section className="bg-green-100 py-20">
      <div className="container mx-auto px-4 max-w-5xl flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 mb-8 md:mb-0">
          <Image 
            src="/images/3d-casual-life-iphone-nft-blockchain.png" 
            alt="Blockchain Security"
            width={414}
            height={452}
            className="w-full h-auto rounded-lg max-w-md mx-auto"
          />
        </div>
        <div className="flex-1 text-start font-jeko max-w-md">
          <h2 className="text-3xl font-bold mb-4">Your Security is Our Priority</h2>
          <p className="text-xl mb-8">
            Every ride is verified on the blockchain, ensuring unmatched security and transparency.
          </p>
          <Link
            href="/ride"
            className="bg-[#121212] text-white px-8 py-3 rounded-lg text-lg transition duration-300 hover:bg-green-500">
            
              Book a Ride
            
          </Link>
        </div>
      </div>
    </section>
  );
}
