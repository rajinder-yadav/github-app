/**
 * Simple Javascript client making API request to Github using GraphQL.
 * You will need to generate a OAuth2 Token from Github,
 * to do this visit: https://github.com/settings/tokens
 *
 * Github developer: https://developer.github.com/
 * Learn GraphQL:    https://graphql.org/learn/
 */

 /**
 * GraphQL Client NPM modules.
 * https://github.com/kadirahq/lokka
 * https://github.com/kadirahq/lokka-transport-http
 */
const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

/**
 * Github OAuth2 Token
 * Generate token: https://github.com/settings/tokens
 */
const gh_token = 'YOUR_GH_TOKEN';

/**
 * Set Header with OAuth2 Token.
 */
const headers = {
  'Authorization': `Bearer ${gh_token}`
};
const client = new Lokka({
  transport: new Transport('https://api.github.com/graphql', {headers})
});

/**
 * Send a GraphQL query request to Github.
 * Forming Calls with GraphQL:
 * https://developer.github.com/v4/guides/forming-calls/
 */
client.query(`
{
  viewer {
    login
    name
  }
}`).then(result => {
    console.log(result.viewer);
});
