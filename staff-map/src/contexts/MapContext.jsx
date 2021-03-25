import React, { useContext, useState } from 'react'
import data_cleaner from "../helper functions/DataCleaner"

const MapContext = React.createContext()
const MapUpdateContext = React.createContext()

export function useMap() {
  return useContext(MapContext)
}

export function useMapUpdate() {
  return useContext(MapUpdateContext)
}

export default function MapProvider({ children }) {
  const [staff, setStaff] = useState()

  function updateStaff(newStaff) {
    setStaff(data_cleaner(newStaff))
  }

  return (
    <MapContext.Provider value={staff}>
      <MapUpdateContext.Provider value={updateStaff}>
        {children}
      </MapUpdateContext.Provider>
    </MapContext.Provider>
  )
}