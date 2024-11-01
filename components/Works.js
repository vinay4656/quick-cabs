import React from 'react';
import { ThumbsUp, Users, MapPin, Star, Shield, Bell } from 'lucide-react';
import Image from 'next/image';

const Works = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-24 m-11 ">
      {/* How it Works Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <Image 
            src="/images/laptop.png" 
            alt="Laptop showing map interface" 
            width={500}
            height={300}
            className="w-full h-auto"
            priority
          />
        </div>
        
        <div className="space-y-8 order-1 md:order-2">
          <h2 className="text-4xl font-bold text-gray-800 text-left">
            How does it <span className="bg-lime-300">work?</span>
          </h2>
          
          <div className="space-y-6">
            {[
              'Enter Trip Details',
              'View Fare Estimate and Confirm Payment',
              'Wait for Driver Assignment and Tracking',
              'Ride'
            ].map((step, index) => (
              <div key={step} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <p className="text-gray-800">{step}</p>
              </div>
            ))}
          </div>
          
          <button 
            className="bg-lime-300 px-6 py-3 rounded font-semibold text-gray-800 hover:bg-lime-400 transition-colors"
            onClick={() => window.location.href = '/ride'}
          
          >
            Book a Ride
          </button>
        </div>
      </section>
    </div>
  );
};

export default Works;
