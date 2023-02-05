import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import {Navigation} from "../src/components/routes/Navigation.jsx"
import store from '../src/store/index'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
      {/* <React.StrictMode> */}
    {/* <Auth0Provider
      domain="dev-xp4wmo5z0oblx157.us.auth0.com"
      clientId="nfR8JrcLD4Uz3kRybl8cv8EGj41YC7W3"
      redirectUri={window.location.origin}
    > */}
        <App/>
    {/* </Auth0Provider> */}
  {/* </React.StrictMode> */}
  </Provider>
);
