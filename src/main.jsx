import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <Auth0Provider
      domain="dev-kvz0qza11y3g1ika.us.auth0.com"
      clientId="Zaqhb1BW5Dtxvs7pgfbKxruk4nqk6dYJ"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    > */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
  {/* </Auth0Provider>, */}
  </React.StrictMode>,
)
