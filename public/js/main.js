const root = document.getElementById('root');
const colorsList = document.createElement('ul');

console.log('hi from main.js app');


fetch('api/v1/colors')
  .then(res => res.json())
  .then(colors => {
    console.log(colors);
    colors.forEach(color => {
      const li = document.createElement('li');
      li.textContent = `${color.name} - ${color.hex} - ${color.r} - ${color.g} - ${color.b}`;

      colorsList.appendChild(li);
    });

  });

root.appendChild(colorsList);
