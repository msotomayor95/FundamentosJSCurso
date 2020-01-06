const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = { crossDomain: true}

function getCharacter(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
        .get(url, OPTS, callback)
        .fail( () => {
            console.log(`Error. We could get the ${id}th character`)
    })
}

getCharacter(1, (person) => {
    console.log(`Hello I'm ${person.name}`)
    getCharacter(2, (person) => {
        console.log(`Hello I'm ${person.name}`)
        getCharacter(3, (person) => {
            console.log(`Hello I'm ${person.name}`)
            getCharacter(4, (person) => {
                console.log(`Hello I'm ${person.name}`)
                getCharacter(5, (person) => {
                    console.log(`Hello I'm ${person.name}`)
                    getCharacter(6, (person) => {
                        console.log(`Hello I'm ${person.name}`)
                        getCharacter(7, (person) => {
                            console.log(`Hello I'm ${person.name}`)
                        })
                    })
                })
            })
        })
    })
})

// getCharacter(2)
// getCharacter(3)