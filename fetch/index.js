const prom = fetch('https://swapi.dev/api/people/')
  .then((response) => {
    if (!response.ok) {
      //   console.log('ERROR NOT STATUS 200', response.status);
      throw new Error(`ERROR NOT STATUS 200 ${response.status}`);
    } else {
      response.json().then((data) => {
        for (let hero of data.results) {
          console.log(hero.name);
        }
      });
    }
  })
  .catch((err) => {
    console.log('SOMETHING WENT WRONG WITH FETCH');
    console.log('err');
  });
