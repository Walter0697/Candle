import constant from './constant'

const randomInt = (max) => {
    return Math.floor(Math.random() * max)
}

const randomWin = () => {
    const chance = randomInt(5)
    return chance === 3
}

const randomStatus = () => {
    const chance = randomInt(5)
    if (chance === 0) return constant.incorrect
    if (chance === 1) return constant.incorrect
    if (chance === 2) return constant.initial
    if (chance === 3) return constant.final
    if (chance === 4) return constant.tone
}

const exist = (words) => {
    // TODO: only for testing
    if (words.startsWith('一')) {
        return false
    }
    return true
}

const guess = (words) => {
    console.log(words)

    // TODO: only for testing
    //if (randomWin()) return { win: true }

    return { 
        win: false,
        result: [randomStatus(), randomStatus(), randomStatus(), randomStatus()]
    }
}

const validate = {
    exist,
    guess,
}

export default validate