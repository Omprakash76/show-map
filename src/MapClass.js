/* eslint-disable no-unused-vars */
import React from "react";
import {
    withGoogleMap,
    GoogleMap,
    Marker,
    withScriptjs,
    InfoWindow
} from "react-google-maps";
import {isEmpty} from 'lodash'

class MapClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { locations: this.props.locations, selectedMarker : {} }; //initialize initial state from props
    }

    onSelectMarker = (location)=>{
        this.setState({
            selectedMarker : location
        })
    }
    render() {
        const selectedMarker = this.state.selectedMarker
        return (
            <GoogleMap defaultZoom={this.props.zoom} defaultCenter={this.props.center}>
                {
                    !isEmpty(this.props.locations) && this.props.locations.map(location => {
                        return <Marker
                            key={location.id + 2}
                            position={{lat: location.lat, lng: location.lng}}
                            icon = {{url: require('./tuk-tuk.png'), scaledSize:  new window.google.maps.Size(35,45)}}
                            onClick={()=>this.onSelectMarker(location)}
                        >
                            {!isEmpty(selectedMarker) && (selectedMarker.id === location.id) && <InfoWindow>
                                <div>
                                    {selectedMarker.title}
                                </div>
                            </InfoWindow>
                            }
                        </Marker>
                    })

                }
            </GoogleMap>
        );
    }
}

export default withScriptjs(withGoogleMap(MapClass));
