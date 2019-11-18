const baseUrl = 'http://localhost:3001/'

export const fetchMembers = handleGetMembers => {
  return fetch(baseUrl + '/members')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        handleGetMembers(responseJson);
      })
      .catch((error) =>{
        console.error(error);
      });
};

// export const postMember = (name, age) => {
//   e.preventDefault();
//   const method = 'POST';
//   const body = new FormData();

//   body.append('name', name);
//   body.append('age', age);

//   return fetch('http://localhost:3001/members', {
//     method,
//     body
//   })
//     .then(response => response.json())
//     .then(responseJson => {
//       console.log(responseJson);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };