import Navbar from "@/components/Navbar";
import Map from "@/components/Map";
import LocationSelector from "@/components/LocationSelector";
import Confirm from "@/components/Confirm";

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-[70%]`, // Map occupies 70% of height
  rideRequestContainer: `h-full w-[350px] absolute bottom-0 left-0 flex flex-col justify-end z-20`, // Removed py-[1rem] and changed h-[90%] to h-full
  rideRequest: `h-[calc(100%-80px)] max-h-[900px] bg-white flex flex-col overflow-scroll p-4`,
  heading: `text-5xl font-bold mb-8`,
  captainStatus: `text-2xl text-gray-600 font-semibold mb-6 flex items-center gap-2`,
  driverCard: `bg-gray-50 p-4 rounded-lg mb-6`,
  driverInfo: `flex items-center gap-4`,
  driverImage: `w-16 h-16 rounded-full`,
  driverDetails: `flex-1`,
  driverName: `text-xl font-semibold`,
  carInfo: `text-gray-600 flex items-center justify-between`,
  rating: `flex items-center gap-1 text-[#ff9b06] mt-1`,
  shareButton: `flex items-center justify-center gap-2 text-teal-500 border border-teal-500 rounded-full px-4 py-1 text-sm ml-auto mt-4`,
  tripDetails: `mt-6`,
  locationItem: `flex items-center gap-4 mb-4`,
  locationDot: `w-3 h-3 rounded-full`,
  locationText: `flex-1`,
  callButton: `bg-[#c9ff37] text-black py-4 text-center text-xl font-medium rounded-lg mt-auto`,
};

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <div className={style.main}>
        <Map />
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          
          <div className={style.captainStatus}>
            <span>Your Captain is on the way</span>
          </div>

          <div className={style.driverCard}>
            <div className={style.driverInfo}>
              <img 
                src="../images/Captain.jpg" 
                className={style.driverImage}
                alt="Driver"
                width={64}
              />
              <div className={style.driverDetails}>
                <h3 className={style.driverName}>Pavan Gowda</h3>
                <div className={style.carInfo}>
                  <span>White Toyota Glanza</span>
                  <span className="border border-gray-300 rounded px-2 py-1">KA51AF2497</span>
                </div>
                <div className={style.rating}>
                  <span>★</span>
                  <span>4.6</span>
                </div>
              </div>
            </div>
            <button className={style.shareButton}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
              </svg>
              Share Detail
            </button>
          </div>

          <div className={style.tripDetails}>
            <h3 className="text-lg font-semibold mb-4">Trip details</h3>
            <div className={style.locationItem}>
              <div className={`${style.locationDot} bg-teal-500`}></div>
              <div className={style.locationText}>
                <div className="font-medium  text-sm">Union Coop Al - St. 78</div>
                <div className="text-gray-500 text-sm">Street 78 - البرشاء - Barsha South-دبي</div>
              </div>
            </div>
            <div className="border-l-2 border-dashed border-gray-300 h-4 ml-[5px]"></div>
            <div className={style.locationItem}>
              <div className={`${style.locationDot} bg-red-400`}></div>
              <div className={style.locationText}>
                <div className="font-medium text-sm">Emaar Dubai Hills Estate</div>
                <div className="text-gray-500 text-xs">36VW+042 Hills Estate Sales Pavilion</div>
              </div>
            </div>
          </div>

          <button className={style.callButton}>
            Call Captain
          </button>
        </div>
      </div>
    </div>
  );
}
