const config = {
  auth0Domain: process.env.AUTH0_DOMAIN,
  auth0ClientId: process.env.AUTH0_CLIENT_ID,
  auth0ApiAudience: process.env.AUTH0_API_AUDIENCE,
  auth0RedirectUri: process.env.AUTH0_REDIRECT_URI
};

module.exports = { config };
