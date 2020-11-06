import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';

export class MapContainer extends React.Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
     
      onMarkerClick = (props, marker, e) =>
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true
        });
     
      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };

    render() {
    return (
      <Map google={this.props.google} zoom={3}
     
      style={{width: '100%', height: '100%', position: 'relative'}}
      initialCenter={{
        lat: 45.83399591752956,
        lng: 6.865088948944674}}
    className={'map'}
    zoom={3}>

  <Marker
    title={'To jest Mont Blanc'}
    name={'Mont_Blanc'}
    position={{lat: 45.83399591752956,lng: 6.865088948944674}} />
  <Marker
    title={'To jest Castor'}
    name={'Castor'}
    position={{lat: 45.92146634061592,lng: 7.793274144339009}} />
  <Marker />
  <Marker
    title={'To jest Pik Lenina'}
    name={'Pik_Lenina'}
    position={{lat: 39.34482316943867,lng: 72.87755635690978}}
    />
    
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} 
                />
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
        
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAMcMluI21YU18VQEhnALDDUoeO9bTmH4M")
})(MapContainer)

