const baseUrl = 'http://localhost:3001'

export const signUp = props => {
  const {
    email,
    password,
    passwordConfirmation,
    setLoggedIn
  } = props;

  const body = new FormData();
  body.append('email', email);
  body.append('password', password);
  body.append('password_confirmation', passwordConfirmation);

  fetchPost({
    url: `${baseUrl}/signup`,
    body: body,
    successAction: setLoggedIn
  });
}

export const login = props => {
  const {
    email,
    password,
    setLoggedIn
  } = props;

  const body = new FormData();
  body.append('email', email);
  body.append('password', password);

  fetchPost({
    url: `${baseUrl}/login`,
    body: body,
    successAction: setLoggedIn
  });
}

export const logout = setLoggedIn => {
  const body = new FormData();

  fetchPost({
    url: `${baseUrl}/logout`,
    body: body,
    successAction: setLoggedIn
  });
}

export const fetchMembers = handleGetMembers => {
  fetchGet({
    url: `${baseUrl}/members`,
    successAction: handleGetMembers
  });
}

export const fetchMember = (id, handleGetMember) => {
  fetchGet({
    url: `${baseUrl}/members/${id}`,
    successAction: handleGetMember
  });
}

export const postMember = props => {
  const {
    name,
    age,
    setLatest
  } = props;

  const body = new FormData();
  body.append('name', name);
  body.append('age', age);

  fetchPost({
    url: `${baseUrl}/members`,
    body: body,
    successAction: setLatest
  });
}

const fetchGet = props => {
  const {
    url,
    successAction,
    failureAction
  } = props;
  console.log(props);

  return fetch(url)
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      if (successAction) {
        successAction(responseJson);
      }
    })
    .catch(error => {
      console.error(error);
      if (failureAction) {
        failureAction();
      }
    });
}

const fetchPost = props => {
  const {
    url,
    body,
    successAction,
    failureAction
  } = props;

  const method = 'POST';

  return fetch(url, {
    method,
    body
  })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
      successAction(responseJson);
    })
    .catch(error => {
      console.error(error);
      if (failureAction) {
        failureAction();
      }
    });
}