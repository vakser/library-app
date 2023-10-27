export const oktaConfig = {
    clientId: '0oacz17v97Wme1PV15d7',
    issuer: 'https://dev-98418519.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true
}