import { create } from 'zustand';
import Location from '../entities/Location';
import Zoom from '../entities/Zoom';

type Store = {
  location: Location
  setLocation: ({latitude,longitude}:Location) => void;
  setZoom: ({latitudeDelta, longitudeDelta}: Zoom) => void;
}

/**
 * Methods: setLocation , setZoom
 */
const useStore = create<Store>((set) => ({
  location: {
    latitude: 0,
    longitude: 0,
    zoom: {
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  },
  setLocation: ({latitude,longitude}:Location) => set((state) => ({
    location: {
      ...state.location,
      latitude,
      longitude,
    },
  })),
  setZoom: ({latitudeDelta, longitudeDelta}: Zoom) => set((state) => ({
    location: {
      ...state.location,
      zoom: {
        latitudeDelta,
        longitudeDelta,
      },
    },
  })),
}));

export default useStore;