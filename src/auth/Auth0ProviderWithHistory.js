import React, { Children } from 'react'
import { useNavigate } from "react-router-dom"
import { Auth0Provider } from '@auth0/auth0-react'

export const Auth0ProviderWithHistory = ({children}) => {

  const history = useNavigate();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID

  const onRedirectCallback = (appState)=>{
    history("/home")
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
