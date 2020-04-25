const search = new URLSearchParams(window.location.search);
const name = search.get('name');


console.log(window.location.toString());
console.log(search);
console.log('name ', name);

const root = document.getElementById('root');
const div = document.createElement('div');

fetch(`/api/v1/colors/${name}`)
  .then(res => res.json())
  .then(color => {
    div.textContent = `${color.name}`;
  });

root.appendChild(div);
