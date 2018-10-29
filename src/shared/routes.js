import Map from './Map'
import About from './About'
import { logCalc, loadQuotes } from './helpers'

const routes =  [
  {
    path: '/',
    component: About,
    react: (req) => loadQuotes()
  },
  {
    path: '/map',
    component: Map,
  },
  {
    path: '/log',
    component: Map,
    react: (req) => logCalc(req.body)
  }
]

export default routes

