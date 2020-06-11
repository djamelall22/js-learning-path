// axios
//   .get('https://swapi.dev/api/people/')
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

const fetchNextHeros = (url = 'https://swapi.dev/api/people/') => {
  console.log(url);
  return axios.get(url);
};

const printHeros = ({ data }) => {
  console.log(data);
  for (let hero of data.results) {
    console.log(hero.name);
  }
  return Promise.resolve(data.next);
};

fetchNextHeros()
  .then(printHeros)
  .then(fetchNextHeros)
  .then(printHeros)
  .then(fetchNextHeros)
  .then(printHeros)
  .catch((err) => console.log('ERROR!!', err));
