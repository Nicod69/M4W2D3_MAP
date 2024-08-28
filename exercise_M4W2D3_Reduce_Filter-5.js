/*
* Implementare la funzione nicknameMap che, dato un array di persone, crea un array di nickname. Il nickname deve essere formato in questa 
modo: <name>-<age>.

Esempio:

{ name: 'Paul', age: 21 } => Paul-21
* */

const nicknameMapUS = (persons) => {
  // ...
}

const nicknameMap = (arPersons) => {
  //console.log("Function nicknameMap: lunghezza array è ", arPersons.length);

  //const arNickNames = arPersons.map((element) => element.name+"-"+element.age);
  return  arPersons.map((element) => element.name+"-"+element.age);


  //console.log("arNickNames = " ,arNickNames);
  // ...
}



const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];


const nicknames = nicknameMap(persons);
console.log("NICKNAMES = ", nicknames);


//******************************************************************************

/*
* Implementare la funzione firstUncompletedNote che, dato un array di note, restituisce la prima nota non completata.
* Una nota viene considerata completata se tutti i todo presenti hanno il flag done impostato a true.
* */

const firstUncompletedNote = (notes) => {
  // ...
  let nota = {};  //notes[1].todos;
  //console.log("trovata nota incompleta = ", nota.find(n =>n.done === false));
  let i =0;
  let bTrovata = false;

  notes.forEach((n) => {
    
    //console.log("questa nota: ", n)
    const uncomplete = n.todos.find(n =>n.done === false);

    //console.log("UNCOMPLETE:= ", uncomplete)

    if (uncomplete !== undefined && bTrovata === false)  
    {
      //console.log("TROVATO NOTA INCOMPLETA ", n)
      nota = n;
      bTrovata = true;
      
    }
    //if (uncomplete) return n;
  
  }); 
  
  if (bTrovata === true){
    //console.log("NOTA INCOMPLETA TROVATA ", bTrovata)
    return nota;
  }
  else{
    //console.log("NOTA NON TROVATA ", bTrovata)
    return "Nessuna nota incompleta trovata, tutte le note sono state completate";

  } 
  
}

const notes = [
  {
    id: 1,
    description: 'Workout program',
    todos: [
      {
        id: 1,
        name: 'Push ups - 10 x 3',
        done: true
      },
      {
        id: 2,
        name: 'Abdominals - 20 x 3',
        done: true
      },
      {
        id: 3,
        name: 'Tapis Roulant - 15min',
        done: true
      }
    ]
  },
  {
    id: 2,
    description: 'Front-end Roadmap',
    todos: [
      {
        id: 1,
        name: 'Learn HTML',
        done: true
      },
      {
        id: 2,
        name: 'Learn CSS',
        done: false
      },
      {
        id: 3,
        name: 'Learn JavaScript',
        done: true
      },
      {
        id: 4,
        name: 'Learn Angular',
        done: false
      }
    ]
  },
  {
    id: 3,
    description: 'My Movies Library',
    todos: [
      {
        id: 1,
        name: 'La città incantata',
        done: true
      },
      {
        id: 2,
        name: 'Avatar',
        done: true
      },
      {
        id: 3,
        name: 'Titanic',
        done: false
      }
    ]
  }
]

const noteInProgress = firstUncompletedNote(notes);
console.log('All notes: ', notes);
console.log('First note in progress: ', noteInProgress);


/*
* Descrizione: Dato un array di numeri, filtra i numeri dispari, moltiplica ciascun numero per 3, e poi somma tutti i risultati.
* (I numeri dispari sono [1, 3, 5, 7, 9])
* (Moltiplicati per 3 diventano [3, 9, 15, 21, 27])
* (La somma è 3 + 9 + 15 + 21 + 27 = 75)
* */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sum = 0;

const sumNumbers = (n1,n2) => n1+n2;   // semplice funzione che somma due numeri dati come parametri


//ricavo i numeri dispari tramite resto della divisione, li moltiplico per 3 e sommo tutti i numeri del nuovo array nella variabile sum
const oddNum = numbers.filter(n => n % 2 !== 0).map((nr) => nr * 3).forEach(number => {
  sum = sumNumbers(sum, number);
})

console.table(sum)  // risultato 75


/*
* Descrizione: Dato un array di oggetti rappresentanti studenti con proprietà nome e voti (un array di numeri), crea un
* NUOVO array di oggetti con proprietà nome e mediaVoti, selezionando solo gli studenti con una media voti maggiore di 7.
*
* NON hai bisogno di creare una funzione, puoi concatenare i metodi per rendere il tutto più leggibile
* PUOI creare una funzione astratta per il reduce
*
* Output:
* [
*   { nome: 'Beatrice', mediaVoti: 9 },
*   { nome: 'Diana', mediaVoti: 7.25 }
* ]
* */

const students = [
  {
    name: 'Alessandro',
    votes: [6, 7, 8, 6]
  },
  {
    name: 'Beatrice',
    votes: [9, 8, 10, 9]
  },
  {
    name: 'Claudio',
    votes: [5, 6, 5, 6]
  },
  {
    name: 'Diana',
    votes: [7, 7, 8, 7]
  }
];



let bestStudents = [];
students.forEach((s) => {
  let averageVote = s.votes.reduce((accu, currValue) => accu + currValue, 0)/s.votes.length;
  if (averageVote >7)  bestStudents.push({"name": s.name, "media voti": averageVote })
})

console.log("Studenti com media voti > di 7 sono: ", bestStudents)


/*
* Descrizione: Dato un array di oggetti rappresentanti articoli con proprietà categoria e nome, raggruppa gli articoli
* per categoria e conta il numero di articoli per ciascuna categoria.
* */

const products = [
  { name: 'Bicicletta', category: 'Sport' },
  { name: 'Pallone', category: 'Sport' },
  { name: 'Mouse', category: 'Elettronica' },
  { name: 'Tastiera', category: 'Elettronica' },
  { name: 'Libro', category: 'Libri' },
  { name: 'Casco', category: 'Sport' }
];




let arProductStatistics = {};

products.forEach(p => {
  arProductStatistics[p.category] = (arProductStatistics[p.category] || 0) + 1

})

console.log("Ecco le quantità di articoli per categoria ")
console.table(arProductStatistics)

/*
* Descrizione: Dato un array di oggetti rappresentanti persone con proprietà nome e acquisti (un array di oggetti
* con prodotto e prezzo), crea un array con le persone e il loro totale speso, ordinate in base al totale in ordine decrescente.
* */

// Output:
// [
//   { nome: 'Marco', totaleSpeso: 1020 },
//   { nome: 'Sara', totaleSpeso: 615 },
//   { nome: 'Luca', totaleSpeso: 310 }
// ]

const buyers = [
  {
    name: "Marco",
    purchases: [
      { product: "Laptop", price: 1000 },
      { product: "Mouse", price: 20 },
    ],
  },
  {
    name: "Sara",
    purchases: [
      { product: "Smartphone", price: 600 },
      { product: "Cover", price: 15 },
    ],
  },
  {
    name: "Luca",
    purchases: [
      { product: "Monitor", price: 300 },
      { product: "Cavo", price: 10 },
    ],
  },
  {
    name: "Andrea",
    purchases: [
      { product: "PS5", price: 800 },
      { product: "Cavo", price: 250 },
      { product: "tv oled", price: 699 },
    ],
  },

];

let buyersWithTotalPurchase = [];


//console.log(buyers[0].purchases[1].price)

//const [prodotto, prezzo] = buyers[0].purchases;

//console.log("PRODOTTO DA DESTRUTTURAZIONE = ", prodotto)
const compareByNumbers = (a,b) =>  a - b;



buyers.forEach(buyer =>{
  
  let tmpTotal = 0;
  buyer.purchases.forEach(p => {
    tmpTotal = tmpTotal + p.price
    })
    buyersWithTotalPurchase.push({"name": buyer.name, "totalPurchase":tmpTotal})

})


// ordiniamo l'array secondo il criterio richiesto

buyersWithTotalPurchase.sort((first, second)  => second.totalPurchase - first.totalPurchase);

console.log("BUYERS WITH TOTAL PURCHASED VALE: ", buyersWithTotalPurchase.sort(compareByNumbers))




/*
* Descrizione: Dato un array di oggetti rappresentanti ordini con proprietà cliente, prodotti
* (un array di oggetti con nome e quantità), calcola il totale di ogni prodotto venduto.
* */

// Output:
// {
//   Mela: 6,
//   Banana: 7,
//   Arancia: 5
// }

const ordini = [
  {
    customer: "Alice",
    products: [
      { name: "Mela", qty: 3 },
      { name: "Banana", qty: 2 },
    ],
  },
  {
    customer: "Bob",
    products: [
      { name: "Mela", qty: 1 },
      { name: "Arancia", qty: 5 },
    ],
  },
  {
    customer: "Charlie",
    products: [
      { name: "Banana", qty: 5 },
      { name: "Mela", qty: 2 },
    ],
  },
];


let arProductsSummary = {};  // oggetto che conterrà tutti i prodotti con la qtà totale


ordini.forEach(el =>{
    el.products.forEach(prod =>{
      arProductsSummary[prod.name] = (arProductsSummary[prod.name] || 0) + prod.qty; 
 
    })
}

)

console.table(arProductsSummary)