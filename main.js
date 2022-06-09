console.log('Witaj przybyszu');
const name = 'Patrycja Kontek'
const age = 27;
console.log(name);
console.log(age);
console.log(`${name}
${age}`);

console.log(`Nazywam się ${name} i mam ${age} lat.`); //literały

const header = document.querySelector('.header__title--js');
console.log(header.innerHTML);

header.innerHTML = '<em>Patrycja</em> Kontek'

const paragraph = document.querySelectorAll('p');
console.log(paragraph);
console.log(paragraph[0]);

