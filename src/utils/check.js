import pronunciation from '../dictionaries/pronunciation'

const wordByPronunciation = (p) => {
    if (pronunciation[p]) {
        return pronunciation[p]
    }
    return false
}

const getRandomPronunciation = () => {
    const keys = Object.keys(pronunciation)
    const randomKey = keys[keys.length * Math.random() << 0]
    return {
        pronunciation: randomKey,
        words: pronunciation[randomKey]
    }
}

const check = {
    wordByPronunciation,
    getRandomPronunciation,
}

export default check