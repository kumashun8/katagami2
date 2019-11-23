export const authenticate = auth => {
  if (auth) {
    localStorage.setItem('currentUser', auth);
  }
}

export const currentUser = () => (
  localStorage.getItem('currentUser')
);

export const logout = () => {
  if (currentUser) {
    localStorage.removeItem('currentUser');
  }
}