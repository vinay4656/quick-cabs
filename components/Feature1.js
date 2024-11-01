import React from 'react';
import Image from 'next/image';

const Works = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-24 m-11">
      {/* How it Works Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center py-12">
        <div className="order-1 md:order-1">
          <Image 
            src="/images/safe.png"
            alt="Driver in a car"
            width={500}
            height={300}
            className="w-full h-auto"
            priority
          />
        </div>
        
        <div className="space-y-8 order-2 md:order-2">
          <h2 className="text-4xl font-bold text-gray-800 text-left">
            Drive when you want, <span className="bg-lime-300">make what you need</span>
          </h2>
          
          <p className="text-gray-600">
            Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through QuickCabs.
          </p>
          
          <button 
            className="bg-lime-300 px-6 py-3 rounded font-semibold text-gray-800 hover:bg-lime-400 transition-colors"
            onClick={() => window.location.href = '/get-started'}
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Works;
