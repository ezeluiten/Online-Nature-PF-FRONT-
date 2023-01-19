import auth0 from "auth0-js";
import scopesArray from "../utils/scopesArray";
import { config } from "../config/client";



export function AuthService () {
  
  config.auth0Domain="dev-xp4wmo5z0oblx157.us.auth0.com"
  config.auth0ClientId="TZH268hWEBtpI9FMPh9zeX4LhuDFpMHY"
  config.auth0ApiAudience="https://online-nature.com/api"
  config.auth0RedirectUri="http://localhost:3001/callback"
  
  console.log("🚀 ~ file: AuthService.js:4 ~ config", config)
  const auth = new auth0.WebAuth({
    domain: config.auth0Domain,
    clientID: config.auth0ClientId,
    audience: config.auth0ApiAudience,
    redirectUri: config.auth0RedirectUri,
    responseType: "token id_token",
    scope: scopesArray.join(" ")
  });


  function login() {
    auth.authorize();
  }

  function logout() {
    // clear access token, id token and profile
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("profile");
  }

  function handleAuthentication() {
    return new Promise((resolve, reject) => {
      auth.parseHash((err, authResult) => {
        if (err) {
          console.log("Error parsing hash in Auth0 service");
          return reject(err);
        }

        if (authResult && authResult.accessToken && authResult.idToken) {
          setSession(authResult);
          return resolve(authResult.accessToken);
        }
      });
    }).then(accessToken => {
      return handleUserInfo(accessToken);
    });
  }

  function setSession(authResult) {
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );

    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
  }

  function isAuthenticated() {
    const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;
  }

  function handleUserInfo(accessToken) {
    return new Promise((resolve, reject) => {
      auth.client.userInfo(accessToken, (err, profile) => {
        if (err) {
          console.log("Error getting user info in Auth0 service");
          return reject(err);
        }

        if (profile) {
          setProfile(profile);
          return resolve(profile);
        }
      });
    });
  }

  function setProfile(profile) {
    localStorage.setItem("profile", JSON.stringify(profile));
  }

  function getProfile() {
    const profile = localStorage.getItem("profile");
    return profile ? JSON.parse(localStorage.profile) : {};
  }
  return {
    login,
    logout,
    handleAuthentication,
    setSession,
    isAuthenticated,
    handleUserInfo,
    setProfile,
    getProfile
  }
}
