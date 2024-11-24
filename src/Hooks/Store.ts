import { create } from 'zustand';
import Location from '../entities/Location';
import Zoom from '../entities/Zoom';
import { createStackNavigator } from '@react-navigation/stack';
import { TypedNavigator } from '@react-navigation/native';

type Store = {
  location: Location
  setLocation: ({lng,lat}:Location) => void;
  setZoom: ({zoomValue}: Zoom) => void;
}

/**
 * Methods: setLocation , setZoom
 */
const useStore = create<Store>((set) => ({
  location: {
    lat: 0,
    lng: 0,
    zoom: {
      zoomValue : 10
    },
  },
  setLocation: ({lng,lat}:Location) => set((state) => ({
    location: {
      ...state.location,
      lat,
      lng,
    },
  })),
  setZoom: ({zoomValue}: Zoom) => set((state) => ({
    location: {
      ...state.location,
      zoom: {
        zoomValue
      },
    },
  })),
}));

export default useStore;