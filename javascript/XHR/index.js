//The Star Wars API

const myRequest = new XMLHttpRequest();
myRequest.addEventListener('load', function () {
  console.log('IT WORKED!');
  const data = JSON.parse(this.responseText);

  for (let hero of data.results) {
    console.log(hero.name);
  }
});
myRequest.addEventListener('error', () => {
  console.log('ERROR!!!');
});
myRequest.open('GET', 'https://swapi.dev/api/people/');
myRequest.send();

console.log('REQUEST SENT'); //--> will appear first
