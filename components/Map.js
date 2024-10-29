'use client'
import { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const style = {
  wrapper: `flex-1 h-full w-full`
}

const Map = () => {
  const mapContainer = useRef(null)
  const map = useRef(null)

  useEffect(() => {
    // Check if we already have a map instance
    if (map.current) return

    try {
      // Use Mapbox default public token
      mapboxgl.accessToken = 'pk.eyJ1IjoidmluYXkyNjQ2IiwiYSI6ImNtMnVrdGZiMDAybTYycnF2ZGVmcTA3cXMifQ.jRSfhVRyqOcupIY2G4hQLA'

      // Create new map instance
      map.current = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [78.9629, 20.5937], // India coordinates
        zoom: 4
      })

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl())

    } catch (error) {
      console.error('Error initializing map:', error)
    }

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove()
      }
    }
  }, [])

  return <div className={style.wrapper} id='map' />
}

export default Map
