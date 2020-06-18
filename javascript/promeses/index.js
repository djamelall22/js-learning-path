// Promise intro

// const makeDogPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random();
//       if (rand < 0.5) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 5000);
//   });
// };

// makeDogPromise()
//   .then(() => console.log('Congrat, You will get a dog! wuaf wuaf!'))
//   .catch(() => console.log(`Sorry, we can't adopt a dog`));

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random();
//       if (rand < 0.3) {
//         reject({ status: 404 });
//       } else {
//         const pages = {
//           '/users': [
//             { id: 1, name: 'idir' },
//             { id: 5, name: 'djamel' },
//           ],
//           '/about': 'this is the about page',
//         };
//         const data = pages[url];
//         resolve({ status: 202, data });
//       }
//     }, 2000);
//   });
// };

// fakeRequest('/about')
//   .then((res) => {
//     console.log('Status Code', res.status);
//     console.log('Data', res.data);
//     console.log(`REQUEST WORKED!`);
//   })
//   .catch((res) => {
//     console.log(res.status);
//     console.log(`REQUEST FAILED!`);
//   });

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        '/users': [
          { id: 1, name: 'idir' },
          { id: 5, name: 'djamel' },
        ],
        '/about': 'this is the about page',
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 202, data });
      } else {
        reject({ status: 404 });
      }
    }, 2000);
  });
};

fakeRequest('/users')
  .then((res) => {
    console.log('Status Code', res.status);
    console.log('Data', res.data);
    console.log(`REQUEST WORKED!`);
  })
  .catch((res) => {
    console.log(res.status);
    console.log(`REQUEST FAILED!`);
  });

fakeRequest('/dogs')
  .then((res) => {
    console.log('Status Code', res.status);
    console.log('Data', res.data);
    console.log(`REQUEST WORKED!`);
  })
  .catch((res) => {
    console.log(res.status);
    console.log(`REQUEST FAILED!`);
  });
