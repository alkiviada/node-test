import React, { Component } from 'react'
import {uid} from 'react-uid';
import BodyClassName from 'react-body-classname';
import { Link } from 'react-router-dom'

class About extends Component {
  constructor(props) {
    super(props);
    let quotes 
    if (__isBrowser__) {
      quotes = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {
      quotes = props.staticContext.quotes
    }
    console.log(quotes)

    this.state = {
      quotes,
      name: '',
      quote: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state.name)
    console.log(this.state.quote)

    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({name: this.state.name, quote: this.state.quote});
    
     return fetch('/:haha')
      .then(response => console.log('I am a response' + response));
  }

  render() {
    console.log(this.props)

    const {quotes} = this.state

    console.log('About ' + quotes)
    return (
      <BodyClassName className="about-body">
      <div className="container">
      <div className="align-left">Test1</div>
      <div className="item-a black-notify"></div>
      <div className="align-right">Test2</div>

      <form className="grid-form" onSubmit={this.handleSubmit}>
        <input className="input form-input" type="text" placeholder="Text input" value={this.state.value} onChange={e => this.setState({name: e.target.value})} />

<div className="form-item-select">
       <select name="car-select" value={this.state.quote} onChange={e => this.setState({quote: e.target.value})}>
         <option>Select dropdown</option>
        { quotes.map(e => <option key={uid(e)} value={e}>{e}</option>) }
         </select>
</div>
<div className="form-item-button">
  <button className="button is-primary">Submit</button>
</div>
</form>
      <Link className="lower-box" to="/map"> 
      <div className="ham"></div>
      <div className="ham"></div>
      </Link>
      </div>
      </BodyClassName>
    )
  }
}

export default About
