// session storage //
/* 5mb of max capacity 
    data saved on user computer
    data expires when the window is closed
*/

// 1 - Insert data//
sessionStorage.setItem('number', 1903)

// 2 - Reset and lose data //
const n = sessionStorage.getItem('number')
console.log(n)
sessionStorage.clear()

// 3 - Save objects //
const person = {
    name: "Matheus",
    age: 18,
    job: "Programmer",
};

localStorage.setItem("person", JSON.stringify(person));

const getPerson = localStorage.getItem("person")
console.log(getPerson)

const personObj = JSON.parse(getPerson)
console.log(typeof personObj)

console.log(personObj.job)



























//LocalStorage//
/*
    10 mb max capacity
    data saved in user computer
    the data don't have a time to expire
    Application on DevTools
*/ 

// 1 - Insert data//
localStorage.setItem('name', 'Matheus')

// 2 - Restart without lost data //

// 3 - Rescue item //
const name = localStorage.getItem('name')

console.log(name)

// 4 - Rescue of an non-existing item //
const lastname = localStorage.getItem('lastname')

if (!lastname){
    console.log("You have to insert your last name")
}


// 5 - Remove item //
//localStorage.removeItem('name')

// 6 - Clear all itens //
localStorage.setItem('a', '1')
localStorage.setItem('b', '2')

localStorage.clear()