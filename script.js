

/*
Exercice 
*/
console.log(`---------------  Exercice --------------`);


// 1- Créez un tableau dont la valeur est les planètes du système solaire.
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

// 2- Pour chaque planète du tableau, créez un <div> fichier using createElement. Cette div doit avoir une classe nommée "planet".
const section = document.querySelector('.listPlanets');

// for (let i = 0; i < planets.length; i++) {
//     const element = array[i];
    
// }

planets.forEach(planet => {
  const div = document.createElement('div');
  div.style.margin = '10px';

  div.classList.add('planet');

  if (planet === 'Mercury') {
    div.style.backgroundColor = '#F5A623';
  } else if (planet === 'Venus') {
    div.style.backgroundColor = '#FF7300';
  } else if (planet === 'Earth') {
    div.style.backgroundColor = '#6552f2';
  } else if (planet === 'Mars') {
    div.style.backgroundColor = '#f76c6c';
  } else if (planet === 'Jupiter') {
    div.style.backgroundColor = '#edde40';
  } else if (planet === 'Saturn') {
    div.style.backgroundColor = '#e55ecc';
  } else if (planet === 'Uranus') {
    div.style.backgroundColor = '#d381ea';
  } else if (planet === 'Neptune') {
    div.style.backgroundColor = '#5fef6e';
  } else if (planet === 'Pluto') {
    div.style.backgroundColor = '#64e5da';
  } 

  div.innerHTML = planet;

  section.appendChild(div);
});

// 3- Pour chaque planète du tableau, créez un <div>fichier using createElement. Cette div doit avoir une classe nommée "planet".
// voir question 2

// 4- Enfin, ajoutez chaque div au <section> dans le HTML (présenté ci-dessous).
// voir question 2


/* 5- Bonus : Faites le même processus pour créer les lunes.
    Attention, chaque planète possède un certain nombre de lunes. Comment devez-vous les afficher ?
    Faut-il encore utiliser un tableau pour les planètes ? Ou un tableau d'objets ?
*/





