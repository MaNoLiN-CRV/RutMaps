import { create } from 'zustand';
import Geolocation from '@react-native-community/geolocation';
import Location from '../entities/Location';
import Zoom from '../entities/Zoom';

interface LocationState {
  location: Location;
  loading: boolean;
  zoom: Zoom;
  error: string | null;
  watchId:  number | null,
  startLocationTracking: () => Promise<void>;
  stopLocationTracking: () => void; 
  setZoom: (zoom: number) => void;
}

const useStore = create<LocationState>((set, get) => ({
  location: { lat: 0, lng: 0 },
  error: null,
  loading: true,
  zoom: { zoomValue: 10 },
  watchId: null, 

  startLocationTracking: async () => {
    try {
      set({ loading: true });
      const watchId = Geolocation.watchPosition(
        ({ coords: { latitude, longitude } }) => {
          set((state) => 
            ({
            ...state,
            location: { lat: latitude, lng: longitude },
            error: null,
            loading: false 
          }));
        },
        (error) => {
          set({
            error: error.message,
            loading: false 
          });
        },
        {
          enableHighAccuracy: true,
          distanceFilter: 50,
          interval: 20000,
          fastestInterval: 10000,
        }
      );

      set({ watchId });

    } catch (error) {
      set({ error: "ERROR", loading: false });
    }
  },

  stopLocationTracking: () => {
    const { watchId } = get();
    if (watchId) {
      Geolocation.clearWatch(watchId);
      set({ loading: false, watchId: null }); 
    }
  },

  setZoom: (zoom: number) => {
    set(() => ({
      zoom: { zoomValue: zoom }
    }));
  }
}));

export default useStore;