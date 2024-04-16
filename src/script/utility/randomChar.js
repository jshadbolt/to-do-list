import randomInt from "./randomInt"


function randomChar() {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    return alphabet[randomInt(0, 27)]

}

export default randomChar
