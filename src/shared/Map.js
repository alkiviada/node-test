import React, { Component } from 'react'
import {uid} from 'react-uid';
import BodyClassName from 'react-body-classname';

class Map extends Component {
  render() {
    console.log('Map ' + this.props.data)
    return (
      <BodyClassName className="map-body">
      <div>
        the undiscovered country, from whose bourn no traveller returns
      </div>
      </BodyClassName>
    )
  }
}

export default Map
