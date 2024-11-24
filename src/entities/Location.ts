import { LatLng } from "leaflet";
import Zoom from "./Zoom";

export default class Location {

    lat: number; 
    lng: number;
    zoom?: Zoom
    
    constructor(latitude:number = 0 , longitude:number = 0 , zoom:Zoom) {
        this.lat = latitude;
        this.lng = longitude;
        this.zoom = zoom;
    }


}