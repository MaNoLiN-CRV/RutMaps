import Zoom from "./Zoom";

export default class Location {

    latitude: number; 
    longitude: number;
    zoom: Zoom
    
    constructor(latitude:number , longitude:number , zoom:Zoom) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.zoom = zoom;
    }


}