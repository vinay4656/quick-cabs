import "@/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { RideProvider } from "@/context/RideContext";

function MyApp({ Component, pageProps }) {
  return (
    <RideProvider>
      <Component {...pageProps} />
    </RideProvider>
  )
}

export default MyApp
