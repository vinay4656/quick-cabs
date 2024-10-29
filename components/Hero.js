export default function HeroSection() {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero.svg')" }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="pt-20 pb-32">
          <h1 className="text-5xl md:text-8xl font-bold text-gray-900 max-w-3xl">
            Find the best
            <span className="block">Taxi ride</span>
          </h1>
          
          <p className=" text-lg text-gray-600 max-w-2xl mt-8">
            Book a ride, jump in, and you're off! Enjoy quick, hassle-free payments 
            for a seamless travel experience with PYUSD
          </p>

          {/* Stats */}
          <div className="mt-12 flex space-x-16">
            <div>
              <div className="text-4xl font-bold text-gray-900">5X</div>
              <div className="text-sm text-gray-500">We are faster in Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900">80+</div>
              <div className="text-sm text-gray-500">Happy Customers</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <button className="px-8 py-3 bg-[#CCFF00] text-black font-semibold rounded-lg hover:bg-[#A5CD1B] transition-all">
              Book a Ride
            </button>
          </div>
        </div>

        {/* Road and car images - positioned absolutely */}
        <div className="absolute right-0 top-0 bottom-0 pr-52">
          <img 
            src="/images/road.svg" 
            alt="Road" 
            className="h-full w-200 object-cover"
          />
          <div className="absolute top-1/2 left-2/2 pl-6">
            <img 
              src="/images/car.svg" 
              alt="Car" 
              className="w-16 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
