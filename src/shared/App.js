import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import About from './About'
import Map from './Map'

class App extends Component {
  render() {
    return (
      <div>
       <Route exact path="/" render={(props) => <About {...props} />} />
       <Route exact path="/map" component={Map} />
      </div>
    )
  }
}

export default App
