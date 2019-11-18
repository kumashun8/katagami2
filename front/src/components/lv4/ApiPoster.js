// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Button, TextField } from '@material-ui/core';
// import { postMember } from 'lib/api';

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     width: '400px'
//   },
//   button: {
//     marginTop: theme.spacing(1),
//   },
// }));

// export default function() {
  

//   return (
//     <form noValidate autoComplete='off'>
//       <div className={classes.container}>
//         <TextField
//           id='standard-basic name'
//           label='Name'
//           type='normal'
//           margin='dense'
//           onChange={e => setName(e.target.value)}
//         />
//         <TextField
//           id='standard-basic'
//           label='Age'
//           type='normal'
//           margin='normal'
//           onChange={e => setAge(e.target.value)}
//         />
//         <Button
//           variant='contained'
//           color='primary'
//           className={classes.button}
//           onClick={e => {
//             e.preventDefault();
//             postMember({ name, age });
//           }}
//         >
//           API-Posting
//         </Button>
//       </div>
//     </form>
//   );
// };