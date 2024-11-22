export default class Zoom {
    latitudeDelta: number; 
    longitudeDelta: number // <--- Zoom 
    /**
     * Zoom constructor (with optionals params)
     * @param latitudeDelta 
     * @param longitudeDelta 
     */
    constructor (latitudeDelta:number = 0.0922 , longitudeDelta:number = 0.0421) {
        this.latitudeDelta = latitudeDelta;
        this.longitudeDelta = longitudeDelta;
    }
}