const baseUrl = 'http://localhost:3001'

export const signup = async(props) => {
  const {
    email,
    password,
    passwordConfirmation,
    handleAuth
  } = props;

  const body = new FormData();
  body.append('email', email);
  body.append('password', password);
  body.append('password_confirmation', passwordConfirmation);

  await fetchPost({
    url: `${baseUrl}/signup`,
    body: body,
    successAction: handleAuth
  });
}

export const login = async(props) => {
  const {
    email,
    password,
    handleAuth
  } = props;

  const body = new FormData();
  body.append('email', email);
  body.append('password', password);

  await fetchPost({
    url: `${baseUrl}/login`,
    body: body,
    successAction: handleAuth
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

const fetchGet = async (props) => {
  const {
    url,
    successAction,
    failureAction
  } = props;

  return await fetch(url)
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

const fetchPost = async(props) => {
  const {
    url,
    body,
    successAction,
    failureAction
  } = props;

  const method = 'POST';

  return await fetch(url, {
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