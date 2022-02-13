import constant from './constant'

const randomInt = (max) => {
    return Math.floor(Math.random() * max)
}

const randomWin = () => {
    const chance = randomInt(5)
    return chance === 3
}

const randomStatus = () => {
    const chance = randomInt(6)
    if (chance === 0) return constant.incorrect
    if (chance === 1) return constant.incorrect
    if (chance === 2) return constant.initial
    if (chance === 3) return constant.final
    if (chance === 4) return constant.tone
    if (chance === 5) return constant.place
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
    if (randomWin()) return { win: true }

    return { 
        win: false,
        result: [randomStatus(), randomStatus(), randomStatus(), randomStatus()]
    }
}

const correct = () => {
    return '正確答案'
}

const validate = {
    exist,
    guess,
    correct,
}

export default validate