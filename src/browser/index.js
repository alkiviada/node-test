import React from 'react'
import { render, hydrate } from 'react-dom'
import App from '../shared/App'
import { BrowserRouter } from 'react-router-dom'

hydrate(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('app')
);
