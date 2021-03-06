export const isAuthenticated = () => {
  if (typeof window === 'undefined') return true;
  let token = window.localStorage.getItem('token');
  return token ? token : false;
};
