export default function HeroSection() {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero1.png')" }}
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
            <button 
              onClick={() => window.location.href = '/ride'}
              className="px-8 py-3 bg-[#CCFF00] text-black font-semibold rounded-lg hover:bg-[#A5CD1B] transition-all"
            >
              Book a Ride
            </button>
          </div>
        </div>

        {/* Road and car images - positioned absolutely */}
        <style>
          {`
            @keyframes slideIn {
              0% {
                transform: translateX(100%);
                opacity: 0;
              }
              100% {
                transform: translateX(0);
                opacity: 1;
              }
            }
            .slide-in {
              animation: slideIn 1s ease-out forwards;
            }
          `}
        </style>
        <div className="absolute right-0 top-0 bottom-0 mt-auto pb-6">
          <img 
            src="/images/car.png" 
            alt="Road" 
            className="h-full w-full slide-in"
          />
        </div>
      </div>
    </div>
  );
}
