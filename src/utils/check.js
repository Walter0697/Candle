import pronunciation from '../dictionaries/pronunciation'

const wordByPronunciation = (p) => {
    if (pronunciation[p]) {
        return pronunciation[p]
    }
    return false
}

const getRandomPronunciation = () => {

}

const check = {
    wordByPronunciation,
    getRandomPronunciation,
}

export default check