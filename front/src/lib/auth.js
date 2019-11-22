export const authenticate = auth => {
  if (auth) {
    localStorage.setItem('currentUser', auth);
  }
}

export const isLoggedIn = () => (
  localStorage.getItem('currentUser')
);

export const logout = () => {
  if (isLoggedIn) {
    localStorage.removeItem('currentUser');
  }
}