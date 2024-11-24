// src/hooks/Store.ts
import { create } from 'zustand';
import Geolocation from '@react-native-community/geolocation';
import { PermissionsAndroid, Platform } from 'react-native';
import Location from '../entities/Location';

interface LocationState {
  location: Location
  loading: boolean;
  error: string | null;
  startLocationTracking: () => Promise<void>;
  setZoom: (zoom: number) => void;
}

const useStore = create<LocationState>((set, get) => ({

  location: { lat: 0, lng: 0, zoom: { zoomValue: 10 } },
  error: null,
  loading: false,


  startLocationTracking: async () => {
    try {
      set({loading:true})
      Geolocation.watchPosition(
        (position) => {
          set((state) => ({

            location: { ...state.location, lat: position.coords.latitude, lng: position.coords.longitude },
            error: null,
            loading:false
          }));
        },
        (error) => {
          throw new Error("ERROR")
        },
        {
          enableHighAccuracy: true,
          distanceFilter: 5, // <-- Actualiza cuando te mueves esto
          interval: 5000,
          fastestInterval: 2000,
        }
      );


    } catch (error) {
      set({ error: "ERROR" });
    }
  },

  setZoom: (zoom: number) => {
    set((state) => ({
      location: {
        ...state.location,
        zoom: { zoomValue: zoom },
      }
    }));
  }
}));

export default useStore;