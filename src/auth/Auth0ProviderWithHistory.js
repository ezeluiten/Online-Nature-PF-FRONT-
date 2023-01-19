import React, { Children } from 'react'
import { useNavigate } from "react-router-dom"
import { Auth0Provider } from '@auth0/auth0-react'

export const Auth0ProviderWithHistory = ({children}) => {

  const history = useNavigate();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN
  console.log("🚀 ~ file: Auth0ProviderWithHistory.js:9 ~ Auth0ProviderWithHistory ~ domain", domain, process.env)
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID
  console.log("🚀 ~ file: Auth0ProviderWithHistory.js:11 ~ Auth0ProviderWithHistory ~ clientId", clientId)

  const onRedirectCallback = (appState)=>{
    history.push(appState?.returnTo || window.location.pathname)
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}
