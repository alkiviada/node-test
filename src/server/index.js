import express from "express"
import { renderToString } from "react-dom/server"
import App from '../shared/App'
import React from 'react'
import { StaticRouter, matchPath } from "react-router-dom"
import routes from '../shared/routes'


import serialize from "serialize-javascript"


const app = express()

// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static("public"))

app.get("*", (req, res, next) => {
  console.log(req.url)

  const activeRoute = routes.find(
    (route) => matchPath(req.url, route)
  ) || {}

  console.log('Active ' + activeRoute.path)

  const data = activeRoute.react
    ? activeRoute.react(req)
    : {}

  console.log(data)

  const markup = renderToString(
    <StaticRouter location={req.url} context={data}>
    <App />
    </StaticRouter>
  )

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Collect Quotes</title>
        <link href="//fonts.googleapis.com/css?family=Alegreya|Cormorant+Garamond" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="/main.css">
        <script>window.__INITIAL_DATA__ = ${serialize(data.quotes)}</script>
        <script src="/bundle.js" defer></script>
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})
