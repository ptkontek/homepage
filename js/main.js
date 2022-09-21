console.log("Witaj przybyszu");
const firstName = "Patrycja Kontek";
const age = 28;
console.log(firstName);
console.log(age);
console.log(`${firstName}
${age}`);
console.log(`Nazywam się ${firstName} i mam ${age} lat.`); //literały

const header = document.querySelector(".header__title--js");
console.log(header.innerHTML);
//header.innerHTML = `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`;

/*function calculate(myNumber) {
  console.log(`Dostałam ${myNumber}`);
 return myNumber * 7;
return `wynik ${myNumber}`; string
const myResult = calculate(1);
console.log(myResult);
}*/
const calculate = (myNumber) => myNumber * 6;
console.log(calculate(2));

/*function greet1(age, firstName) {
 console.log(
   `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`
 );
}*/
const greet = (age, firstName) => {
  console.log(
    `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lat.`
  );
};
greet(age, firstName); 

//const emptyParagraph = document.querySelector(".about__paragraph--js");
//emptyParagraph.innerHTML = `Uzupełniłam treść javascriptem! To jest sekcja o mnie.`;
/*function createContent(querySelectroContent, content) {
  const element = document.querySelector(querySelectroContent);
  element.innerHTML = content;
}
createContent(".about__paragraph--js", "Witaj świecie"); //bez return robi zmianę na stronie*/

//obiekt
const deathStar = {
  // obiekt
  diameter: 120000, //własności
  fire: (target) => {
    //metoda
    console.log(`${target} destroyed`);
  },
  isOperating: true,
  name: "Death Star",
  levels: 357,
  population: 10000,
  isLightOn: true,
  commander: {
    name: "Darth Vader",
    age: 44,
  },
};

console.log(deathStar); //cały obiekt
console.log(deathStar.name); //wywołanie pojedynczej własności: obiekt.własność
console.log(typeof deathStar.name); //typ własności -> string
console.log(deathStar.commander.age); //wywołanie dot notation
deathStar.fire("Rebel ship"); //wywołanie metody z obiektu
console.log(deathStar["name"]); //wywołanie bracket notation
//console.log(console) wszystkie metody, które ma obiekt console

const myProperty = "name"; // funkcja do wypisywania
const showMeProperty = (myProperty) => {
  console.log(`Twoja własność ${myProperty} to ${deathStar[myProperty]}`);
};
showMeProperty("population");

const humanOne = {
  name: "Maciek",
  age: 32,
  address: {
    street: "Warszawska",
    city: "Białystok",
  },
};

const humanTwo = {
  name: "Stefan",
  age: humanOne.age, //przypisanie połączenia, gdy zmienię age w humanOne to nie zmienia się age w humanTwo
  address: {
    street: humanOne.address.street,
    city: "Białystok",
  },
};

humanOne.address.street = "Lipowa";
console.log(humanOne);
console.log(humanTwo);
