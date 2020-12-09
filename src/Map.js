/* eslint-disable no-unused-vars */
import React from "react";
import MapClass from "./MapClass";
// import {getVehicleTrackingLocation} from "../actions/vehicle_repo";
import {get, isEmpty} from "lodash";
import moment from "moment"

class TrackVehicleOnMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [
                {
                    id : 0,
                    lat : 26.895917,
                    lng : 75.784315,
                    title : 'Ramu ka Vehicle'
                }
            ],
        }
    }
    componentDidMount = async ()=>{
        // await this.fetchLocations()
    }

    // fetchLocations = async () => {
    //     const result = await this.props.getVehicleTrackingLocation(this.props.staff.staff_id)
    //     const markers = get(result, 'payload.data', [])
    //     let allLocations = []
    //     if(markers ) {
    //         for (let i =0; i<markers.length; i++) {
    //             allLocations.push({
    //                 name: "Newcastle",
    //                 title: `Time: ${moment(markers[i].capture_time).format('h:mm:ss a')}`,
    //                 label : ``,
    //                 lat: markers[i].latitude,
    //                 lng: markers[i].longitude,
    //                 id: i,
    //             })
    //         }
    //
    //         this.setState({
    //             locations: allLocations
    //         });
    //     }
    // }

    render(){
        return (
            <MapClass
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA0pVifSUWG1lOWJsEbXAa6ZTJoIQSM9SU"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `700px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                center={{ lat: this.state.locations[0].lat, lng:  this.state.locations[0].lng }}
                zoom={15}
                locations={this.state.locations}
            />
        );
    }
}


export default TrackVehicleOnMap

