import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

class LeafletMap extends Component {

  static propTypes = {
    /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
    position: PropTypes.array,

    /** Initial zoom level for the map (default 13) **/
    zoom: PropTypes.number,

    /** If set, will display a marker, which when clicked will display this text **/
    markerText: PropTypes.string
  }

  static defaultProps = {
    position: [31.2632623, 34.8086711],
    zoom: 13,
    markerText: ""
  }

  render() {
    return (
        <MapContainer center={this.props.position} zoom={this.props.zoom} style={{ height: '50vh', width: '100%' }}>
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {this.props.markerText !== "" &&
            <Marker position={this.props.position}>
              <Popup>{this.props.markerText}</Popup>
            </Marker>
          }
        </MapContainer>
    );
  }
}

export default LeafletMap
