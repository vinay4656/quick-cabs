import React from 'react';
import { ThumbsUp, Users, MapPin, Star, Shield, Bell } from 'lucide-react';

const Feature = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-24 ">
      {/* Why Choose Us Section */}
      <section className="space-y-8 ">
        <h2 className="text-4xl font-bold text-gray-800">
          So, why choose <span className="bg-lime-300">us?</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 border-2 border-[#CCFF00] rounded-lg flex items-center justify-center mb-4">
              <ThumbsUp className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fair prices</h3>
            <p className="text-gray-600">Choose the best offer at your price</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 border-2 border-[#CCFF00] rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified drivers</h3>
            <p className="text-gray-600">Choose your driver based on their rating, reviews, and car</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 border-2 border-[#CCFF00] rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Door-to-door service</h3>
            <p className="text-gray-600">You can be picked up and dropped off directly at your desired location</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;