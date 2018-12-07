import React from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";

/**The class uses google-maps-react library to mark places on the map */
export class EarthMapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
    };
  }

  /**A function to be called on click event on the marker */
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  /**A function to be called on the closing the info window */
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const style = {
      height: "70vh"
    };

    return (
      <>
        {" "}
        <Map
          google={this.props.google}
          zoom={2}
          style={style}
          initialCenter={{
            lat: 0,
            lng: 180
          }}
        >
          {this.props && this.props.quakes && this.props.quakes.length > 0
            ? this.props.quakes.map(quake => (
                <Marker
                  title={quake.properties.title}
                  time={quake.properties.time}
                  position={{
                    lat: quake.geometry.coordinates[1],
                    lng: quake.geometry.coordinates[0]
                  }}
                  key={quake.id}
                  onClick={this.onMarkerClick}
                >
                  {" "}
                </Marker>
              ))
            : ``}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>
                {this.state.activeMarker && this.state.activeMarker.title
                  ? this.state.activeMarker.title
                  : ``}
              </h4>
              <h4>
                {this.state.activeMarker && this.state.activeMarker.time
                  ? new Date(this.state.activeMarker.time).toDateString()
                  : ``}
              </h4>
            </div>
          </InfoWindow>
        </Map>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As"
})(EarthMapContainer);
