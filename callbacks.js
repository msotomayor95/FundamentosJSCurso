const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = { crossDomain: true}

function getCharacter(id, callback){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, OPTS, data => {
                resolve(data)
            })
            .fail( () => reject(id))
    })
}

function onError(id) {
    console.log (`Error while getting the character number ${id}`)
}

getCharacter(1)
    .then((character) => {
        console.log(`The character number 1 is ${character.name}`)
        return getCharacter(2)
    })
    .then((character) => {
        console.log(`The character number 2 is ${character.name}`)
        return getCharacter(3)
    })
    .then((character) => {
        console.log(`The character number 3 is ${character.name}`)
        return getCharacter(4)
    })
    .then((character) => {
        console.log(`The character number 4 is ${character.name}`)
        return getCharacter(5)
    }).then((character) => {
        console.log(`The character numer 5 is ${character.name}`)
    })
    .catch(onError)

// getCharacter(1, (person) => {
//     console.log(`Hello I'm ${person.name}`)
//     getCharacter(2, (person) => {
//         console.log(`Hello I'm ${person.name}`)
//         getCharacter(3, (person) => {
//             console.log(`Hello I'm ${person.name}`)
//             getCharacter(4, (person) => {
//                 console.log(`Hello I'm ${person.name}`)
//                 getCharacter(5, (person) => {
//                     console.log(`Hello I'm ${person.name}`)
//                     getCharacter(6, (person) => {
//                         console.log(`Hello I'm ${person.name}`)
//                         getCharacter(7, (person) => {
//                             console.log(`Hello I'm ${person.name}`)
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })

// getCharacter(2)
// getCharacter(3)