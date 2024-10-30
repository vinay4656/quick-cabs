import Navbar from "@/components/Navbar";
import Map from "@/components/Map";
import LocationSelector from "@/components/LocationSelector";
import Confirm from "@/components/Confirm";

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: `h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-[70%]`, // Map occupies 70% of height
  rideRequestContainer: `h-full w-[350px] absolute bottom-0 left-0 flex flex-col justify-end z-20`, // Removed py-[1rem] and changed h-[90%] to h-full
  rideRequest: `h-[calc(100%-80px)] max-h-[900px] bg-white flex flex-col overflow-scroll`, // Adjusted height to account for navbar
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
          <LocationSelector />
          <Confirm />
        </div>
      </div>
    </div>
  );
}
