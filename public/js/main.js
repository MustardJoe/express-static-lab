const root = document.getElementById('root');
const colorsList = document.createElement('ul');

console.log('hi from main.js app');


fetch('api/v1/colors')
  .then(res => res.json())
  .then(colors => {
    console.log(colors);
    colors.forEach(color => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      li.textContent = `${color.name} - ${color.hex} - ${color.r} - ${color.g} - ${color.b}`;
      a.href = `/colors.html?name=${color.name}`;
      a.appendChild(li);
      colorsList.appendChild(a);
    });

  });

root.appendChild(colorsList);

