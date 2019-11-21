export const isValidEmail = email => {
  const regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
  return regexp.test(email);
}

export const isValidPassword = password => {
  const regexp = /^[a-zA-Z0-9!-/:-@¥[-`{-~]{6,}$/;
  return regexp.text(password);
}

export const isValidAndMacthedPassword = (password, passwordConf) => {
  if (!isValidPassword(password) || !isValidPassword(passwordConf)) {
    return false;
  }
  return (passwordConf === passwordConf);
}