import createAuth0Client from '@auth0/auth0-spa-js';

let auth0 = null;
const config = {
  domain: 'YOUR_AUTH0_DOMAIN',
  client_id: 'YOUR_AUTH0_CLIENT_ID',
};

export const initAuth = async () => {
  auth0 = await createAuth0Client(config);
};

export const login = async () => {
  await auth0.loginWithPopup();
};

export const logout = () => {
  auth0.logout({ returnTo: window.location.origin });
};

export const isAuthenticated = async () => {
  return await auth0.isAuthenticated();
};

export const getUser = async () => {
  return await auth0.getUser();
};
