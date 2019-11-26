const baseUrl = 'http://localhost:3001'

export const signup = async (props) => {
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

export const login = async (props) => {
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

export const fetchMembers = async (handleGetMembers) => {
  await fetchGet({
    url: `${baseUrl}/members`,
    successAction: handleGetMembers
  });
}

export const fetchMember = async (id, handleGetMember) => {
  await fetchGet({
    url: `${baseUrl}/members/${id}`,
    successAction: handleGetMember
  });
}

export const postMember = async (props) => {
  const {
    name,
    age,
    setLatest
  } = props;

  const body = new FormData();
  body.append('name', name);
  body.append('age', age);

  await fetchPost({
    url: `${baseUrl}/members`,
    body: body,
    successAction: setLatest
  });
}

export const postComment = async (props) => {
  const {
    detail,
    user,
    member,
    setLatest
  } = props;

  const body = new FormData();
  body.append('detail', detail);
  body.append('user', user);
  body.append('member', member);

  await fetchPost({
    url: `${baseUrl}/comments`,
    body: body,
    successAction: setLatest
  });
}

export const updateComment = async (props) => {
  const {
    id,
    detail,
    toggleEdittable
  } = props;
  const body = new FormData();
  body.append('detail', detail);

  await fetchPost({
    url: `${baseUrl}/comments/update/${id}`,
    body: body,
    successAction: toggleEdittable
  });
}

export const deleteComment = async (props) => {
  const {
    id,
    handleDelete
  } = props;

  const body = new FormData();

  await fetchPost({
    url: `${baseUrl}/comments/destroy/${id}`,
    body: body,
    successAction: handleDelete
  });
}

export const fetchCommentsOfMember = async (id, handleGetComments) => {
  await fetchGet({
    url: `${baseUrl}/comments/members/${id}`,
    successAction: handleGetComments
  });
}

export const fetchUserAndOwnComments = async (id, handleGetUser) => {
  await fetchGet({
    url: `${baseUrl}/users/${id}`,
    successAction: handleGetUser
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
      if (successAction) {
        successAction(responseJson);
      }
      // console.log('fetch is finished');
    })
    .catch(error => {
      console.error(error);
      if (failureAction) {
        failureAction();
      }
    });
}