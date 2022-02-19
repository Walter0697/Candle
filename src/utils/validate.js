import constant from './constant'
import dictionary from './dictionary'

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

const randomPronounce = () => {
    const chance = randomInt(6)
    if (chance === 0) return 'jat1'
    if (chance === 1) return 'ji6'
    if (chance === 2) return 'saam1'
    if (chance === 3) return 'sei3'
    if (chance === 4) return 'ng5'
    if (chance === 5) return 'luk6'
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
    if (randomWin()) 
        return { 
            win: true,
            result: [
                { status: constant.correct, pronounce: randomPronounce() },
                { status: constant.correct, pronounce: randomPronounce() },
                { status: constant.correct, pronounce: randomPronounce() },
                { status: constant.correct, pronounce: randomPronounce() },
            ]
        }

    return { 
        win: false,
        result: [
            { status: randomStatus(), pronounce: randomPronounce() },
            { status: randomStatus(), pronounce: randomPronounce() },
            { status: randomStatus(), pronounce: randomPronounce() },
            { status: randomStatus(), pronounce: randomPronounce() },
        ]
    }
}

const correct = () => {
    return '正確答案'
}

const guessValidator = (guess, answer) => {
    // check if answer is in the dictionary
    const guessObj = dictionary.find(obj => obj.phrase === guess)
    const answerObj = dictionary.find(obj => obj.phrase === answer)

    const resultObj = { 
        valid: false,
        win: false,
        result: [
            { status: constant.incorrect, pronounce: null, check: null },
            { status: constant.incorrect, pronounce: null, check: null },
            { status: constant.incorrect, pronounce: null, check: null },
            { status: constant.incorrect, pronounce: null, check: null },
        ]
    }

    // Case 1: either the answer or the guess is not in the dictionary
    if (!answerObj || !guessObj)
        return resultObj

    resultObj.valid = true
    
    // Case 2: win
    if (answer === guess) {
        resultObj.win = true
        resultObj.result.forEach((word, idx) => {
            word.status = constant.correct
            word.pronounce = answerObj[`w${idx}`]
        })
        return resultObj
    }

    // Case 3: others
    const guessCheck = dictionary.find(obj => obj.phrase === guess)
    
    // this is for answer
    const isChecked = {
        "w0": false,
        "w1": false,
        "w2": false,
        "w3": false,
    }
    // this is for guess
    const givenHints = {
        "w0": false,
        "w1": false,
        "w2": false,
        "w3": false,
    }
    
    // Check within the same word pair (e.g. check w0 -> w0, w1 -> w1 ...)
    for (let i = 0; i < 4; i++) {
        const initialMatched = guessObj[`w${i}`].initial === answerObj[`w${i}`].initial
        const finalMatched = guessObj[`w${i}`].final === answerObj[`w${i}`].final
        const toneMatched = guessObj[`w${i}`].tone === answerObj[`w${i}`].tone
        guessCheck[`w${i}`] = {
            "initial": initialMatched,
            "final": finalMatched,
            "tone": toneMatched,
        }
        isChecked[`w${i}`] = initialMatched || finalMatched
        givenHints[`w${i}`] = initialMatched || finalMatched

        resultObj.result[i].check = guessCheck[`w${i}`]

        if (initialMatched && finalMatched && toneMatched)
            resultObj.result[i].status = constant.correct
        else if (initialMatched && finalMatched)
            resultObj.result[i].status = constant.wrongTone
        else if (initialMatched)
            resultObj.result[i].status = constant.initial
        else if (finalMatched)
            resultObj.result[i].status = constant.final

    }

    // Check misplaced words / initials / finals
    // Step 1: check if a guess word has the same initial & final
    for (let i = 0; i < 4; i++) {
        if (isChecked[`w${i}`] === true)
            return
        
        let matchedWordIndex = null
        for (let j = 0; j < 4; j++) {
            if (givenHints[`w${j}`] === true)
                return
            
            if ((guessObj[`w${j}`].initial === answerObj[`w${i}`].initial) && (guessObj[`w${j}`].final === answerObj[`w${i}`].final)) {
                matchedWordIndex = j
                resultObj.result[j].status = constant.placeBoth
                isChecked[`w${i}`] = true
                givenHints[`w${j}`] = true
            }
        }
    }

    // Step 2: check if a guess word has the same initial OR final
    for (let i = 0; i < 4; i++) {
        if (isChecked[`w${i}`] === true)
            return

        let isCheckedTemp = false
        
        // ! LOGIC: if a guess word has given hints of "misplaced initial" (i.e. placeInitial), then it won't be checked for "misplaced final" (i.e. placeFinal)
        // Check initial
        let matchedInitIndex = null
        for (let j = 0; j < 4; j++) {
            if (givenHints[`w${j}`] === true)
                return
            
            if (guessObj[`w${j}`].initial === answerObj[`w${i}`].initial) {
                matchedInitIndex = j
                resultObj.result[j].status = constant.placeInitial
                isCheckedTemp = true
                givenHints[`w${j}`] = true
            }
        }

        // Check final
        let matchedFinalIndex = null
        for (let j = 0; j < 4; j++) {
            if (givenHints[`w${j}`] === true)
                return
            
            if (guessObj[`w${j}`].final === answerObj[`w${i}`].final) {
                matchedFinalIndex = j
                resultObj.result[j].status = constant.placeFinal
                isCheckedTemp = true
                givenHints[`w${j}`] = true
            }
        }

        isChecked[`w${i}`] = isCheckedTemp
    }

    return resultObj
}

const validate = {
    exist,
    guess,
    correct,
    guessValidator,
}

export default validate