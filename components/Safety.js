import React from "react";
import { Star, Shield, Bell } from "lucide-react";
import Image from "next/image";

const Safety = () => {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-24">
        {/* Safety Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-800">
              We care about <span className="bg-lime-300">safety</span>
            </h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#CCFF00] rounded-lg flex items-center justify-center">
                    <Star className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold">Rating system</h3>
                </div>
                <p className="text-gray-600 pl-16">
                  We ask users to give us their honest feedback after each ride.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#CCFF00] rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold">On ground support</h3>
                </div>
                <p className="text-gray-600 pl-16">
                  In line with our Safety First philosophy, we have been
                  conducting a stringent Four-step Background Verification of
                  every Captain on our platform.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-[#CCFF00] rounded-lg flex items-center justify-center">
                    <Bell className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-semibold">Safety button</h3>
                </div>
                <p className="text-gray-600 pl-16">
                  Tap it to quickly contact the police or emergency services
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[400px]">
            <Image
              src="/images/safe.png"
              alt="City illustration with car"
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Safety;
