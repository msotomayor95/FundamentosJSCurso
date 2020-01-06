const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = { crossDomain: true}

function getCharacter(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, OPTS, ({name}) => {
        console.log(`Hi I'm ${name}`)
    })

    if (callback) callback()
}

getCharacter(1, () => {
    getCharacter(2, () => {
        getCharacter(3, () => {
            getCharacter(4, () => {
                getCharacter(5, () => {
                    getCharacter(6, () => {
                        getCharacter(7, () => {
                            getCharacter(8)
                        })
                    })
                })
            })
        })
    })
})

// getCharacter(2)
// getCharacter(3)