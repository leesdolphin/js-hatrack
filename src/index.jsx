import './lib/hatrack.js'
import 'oauth-web'
import React from 'react'
import ReactDOM from 'react-dom'

import { Main } from './components/root.jsx'

function entrypoint (domElm) {
  return ReactDOM.render(
    (<Main />),
    domElm
  )
}

export { entrypoint }
