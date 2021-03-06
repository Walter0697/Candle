import constant from './constant'
import dictionary from '../dictionaries/dictionary'
import duplicates from '../dictionaries/duplicates'
import wordbank from '../dictionaries/wordbank'
import config from './configuration'
import * as seedrandom from 'seedrandom'

const getTodayIndex = (dateIndex) => {
    const token = config.seedToken
    const rng = seedrandom(`${token}-${dateIndex}`)
    const max = dictionary.length
    return Math.floor(rng() * max)
}

const getCurrentWord = (dateIndex) => {
    const todayIndex = getTodayIndex(dateIndex)
    const currentWord = dictionary[todayIndex].idiom
    return currentWord
}

const exist = (words) => {
    const guessObj = wordbank.find(obj => obj.idiom === words)
    if (!guessObj) {
        return false
    }
    return true
}

const guess = (words, dateIndex) => {
    const answer = getCurrentWord(dateIndex)

    const resultObj = guessValidator(words, answer)
    
    return JSON.parse(JSON.stringify(resultObj))
}

const correct = (dateIndex) => {
    const answer = getCurrentWord(dateIndex)
    const duplicatedAns = duplicates.find(dup => dup.idiom2 === answer)

    let answerString = `${answer}`
    if (duplicatedAns) {
        answerString += ` / ${duplicatedAns.idiom}`
    }

    return answerString
}

const first = (dateIndex) => {
    const correctans = getCurrentWord(dateIndex)
    return correctans.charAt(0)
}

const sameWordChecking = (guessObj, answerObj, resultObj) => {
    resultObj.result.forEach((r, index) => {
        r.sameWord = (guessObj.idiom.charAt(index) == answerObj.idiom.charAt(index))
    })
}

const allGreenYellowCheck = (guessObj, answerObj, resultObj, statusObject, allGreenYellowCheckObject) => {
    // Check all green
    for (let i = 0; i < 4; i++) {
        const pronouncePartMatched = (
            (guessObj[`w${i}`].initial == answerObj[`w${i}`].initial) &&
            (guessObj[`w${i}`].final == answerObj[`w${i}`].final) &&
            (guessObj[`w${i}`].tone == answerObj[`w${i}`].tone)
        )
        if (pronouncePartMatched) {
            allGreenYellowCheckObject.givenHints[`w${i}`] = true
            allGreenYellowCheckObject.isChecked[`w${i}`] = true
            resultObj.result[i].status = constant["ggg"]
            statusObject.array[i] = "ggg"
        }
    }

    // Check all yellow
    for (let i = 0; i < 4; i++) {
        if (!allGreenYellowCheckObject.givenHints[`w${i}`]) {
            for (let j = 0; j < 4; j++) {
                if (!allGreenYellowCheckObject.isChecked[`w${j}`] && (
                        (answerObj[`w${j}`].initial == guessObj[`w${i}`].initial) &&
                        (answerObj[`w${j}`].final == guessObj[`w${i}`].final) &&
                        (answerObj[`w${j}`].tone == guessObj[`w${i}`].tone)
                    ))
                {
                    allGreenYellowCheckObject.givenHints[`w${i}`] = true
                    allGreenYellowCheckObject.isChecked[`w${j}`] = true
                    resultObj.result[i].status = constant["yyy"]
                    statusObject.array[i] = "yyy"
                }
            }
        }
    }
}

const comparePronounce = (guessObj, answerObj, pronounceIndex, resultObj, statusObject, allGreenYellowCheckObject) => {
    let compareType = null
    switch (pronounceIndex) {
        case 0:
            compareType = "initial"
            break
        case 1:
            compareType = "final"
            break
        case 2:
            compareType = "tone"
            break
        default:
            break
    }

    // this is for answer
    const isChecked = {
        "w0": false || allGreenYellowCheckObject.isChecked['w0'],
        "w1": false || allGreenYellowCheckObject.isChecked['w1'],
        "w2": false || allGreenYellowCheckObject.isChecked['w2'],
        "w3": false || allGreenYellowCheckObject.isChecked['w3'],
    }
    // this is for guess
    const givenHints = {
        "w0": false || allGreenYellowCheckObject.givenHints['w0'],
        "w1": false || allGreenYellowCheckObject.givenHints['w1'],
        "w2": false || allGreenYellowCheckObject.givenHints['w2'],
        "w3": false || allGreenYellowCheckObject.givenHints['w3'],
    }

    function setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substring(0,index) + chr + str.substring(index+1);
    }
    
    // Check green
    for (let i = 0; i < 4; i++) {
        const pronouncePartMatched = (guessObj[`w${i}`][compareType] == answerObj[`w${i}`][compareType])
        if (!isChecked[`w${i}`] && pronouncePartMatched) {
            givenHints[`w${i}`] = true
            isChecked[`w${i}`] = true
            resultObj.result[i].status = constant[setCharAt(statusObject.array[i], pronounceIndex, "g")]
            statusObject.array[i] = setCharAt(statusObject.array[i], pronounceIndex, "g")
        }
    }

    // Check yellow
    for (let i = 0; i < 4; i++) {
        if (!givenHints[`w${i}`]) {
            for (let j = 0; j < 4; j++) {
                if (!isChecked[`w${j}`] && (answerObj[`w${j}`][compareType] == guessObj[`w${i}`][compareType])) {
                    givenHints[`w${i}`] = true
                    isChecked[`w${j}`] = true
                    resultObj.result[i].status = constant[setCharAt(statusObject.array[i], pronounceIndex, "y")]
                    statusObject.array[i] = setCharAt(statusObject.array[i], pronounceIndex, "y")
                }
            }
        }
    }
}

const guessValidator = (guess, answer) => {
    let resultObj = { 
        valid: false,
        win: false,
        result: [
            { status: constant["xxx"], pronounce: null, sameWord: false },
            { status: constant["xxx"], pronounce: null, sameWord: false },
            { status: constant["xxx"], pronounce: null, sameWord: false },
            { status: constant["xxx"], pronounce: null, sameWord: false },
        ]
    }

    // Case 1: "guess" is not in the wordbank
    if (!exist(guess)) {
        return resultObj
    }

    resultObj.valid = true
    
    let guessObj = JSON.parse(JSON.stringify(wordbank.find(obj => obj.idiom === guess)))
    let answerObj = JSON.parse(JSON.stringify(wordbank.find(obj => obj.idiom === answer)))

    // set pronounce
    resultObj.result.forEach((word, idx) => {
        word.pronounce = guessObj[`w${idx}`]
    })

    const guessPronunce = [guessObj.w0, guessObj.w1, guessObj.w2, guessObj.w3]
    const answerPronunce = [answerObj.w0, answerObj.w1, answerObj.w2, answerObj.w3]

    // Case 2: win
    if ((answer === guess) || (JSON.stringify(guessPronunce) === JSON.stringify(answerPronunce))) {
        resultObj.win = true
        resultObj.result.forEach(w => {
            w.status = constant["ggg"]
            w.sameWord = true
        })
        return resultObj
    }

    // Case 3: compare pronounce
    let statusObject = { array: ["xxx", "xxx", "xxx", "xxx"]}
    let allGreenYellowCheckObject = {
        isChecked: {
            "w0": false,
            "w1": false,
            "w2": false,
            "w3": false,
        },
        givenHints: {
            "w0": false,
            "w1": false,
            "w2": false,
            "w3": false,
        }
    }
    sameWordChecking(guessObj, answerObj, resultObj)
    allGreenYellowCheck(guessObj, answerObj, resultObj, statusObject, allGreenYellowCheckObject)
    comparePronounce(guessObj, answerObj, 0, resultObj, statusObject, allGreenYellowCheckObject)
    comparePronounce(guessObj, answerObj, 1, resultObj, statusObject, allGreenYellowCheckObject)
    comparePronounce(guessObj, answerObj, 2, resultObj, statusObject, allGreenYellowCheckObject)
    return resultObj
}

const guessValidatorOld = (guess, answer) => {
    // check if answer is in the wordbank
    let guessObj = JSON.parse(JSON.stringify(wordbank.find(obj => obj.idiom === guess)))
    let answerObj = JSON.parse(JSON.stringify(wordbank.find(obj => obj.idiom === answer)))

    let resultObj = { 
        valid: false,
        win: false,
        result: [
            { status: constant.incorrect, pronounce: null, check: null },
            { status: constant.incorrect, pronounce: null, check: null },
            { status: constant.incorrect, pronounce: null, check: null },
            { status: constant.incorrect, pronounce: null, check: null },
        ]
    }

    // Case 1: either the answer or the guess is not in the wordbank
    if (!answerObj || !guessObj)
        return resultObj

    resultObj.valid = true
    // set pronounce
    resultObj.result.forEach((word, idx) => {
        word.pronounce = guessObj[`w${idx}`]
    })
    
    // Case 2: win
    // TODO: varify by pronounce
    // if (JSON. answerObj.w0)
    const guessPronunce = [guessObj.w0, guessObj.w1, guessObj.w2, guessObj.w3]
    const answerPronunce = [answerObj.w0, answerObj.w1, answerObj.w2, answerObj.w3]
    if ((answer === guess) || (JSON.stringify(guessPronunce) === JSON.stringify(answerPronunce))) {
        resultObj.win = true
        resultObj.result.forEach((word) => {
            word.status = constant.correct
        })
        return resultObj
    }

    // Case 3: others
    const guessCheck = JSON.parse(JSON.stringify(wordbank.find(obj => obj.idiom === guess)))
    
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
            resultObj.result[i].status = constant.rightInitial
        else if (finalMatched)
            resultObj.result[i].status = constant.rightFinal

    }

    // Check misplaced words / initials / finals
    // Step 1: check if a guess word has the same initial & final
    for (let i = 0; i < 4; i++) {
        if (isChecked[`w${i}`] !== true) {
            for (let j = 0; j < 4; j++) {
                if ((givenHints[`w${j}`] !== true) && (guessObj[`w${j}`].initial === answerObj[`w${i}`].initial) && (guessObj[`w${j}`].final === answerObj[`w${i}`].final)) {
                    resultObj.result[j].status = constant.wrongPlace
                    isChecked[`w${i}`] = true
                    givenHints[`w${j}`] = true
                }
            }
        }
    }

    /*
    // Step 2: check if a guess word has the same initial OR final
    for (let i = 0; i < 4; i++) {
        if (isChecked[`w${i}`] !== true) {
            let isCheckedTemp = false
            
            // ! LOGIC: if a guess word has given hints of "misplaced initial" (i.e. placeInitial), then it won't be checked for "misplaced final" (i.e. placeFinal)
            // Check initial
            for (let j = 0; j < 4; j++) {
                if ((givenHints[`w${j}`] !== true) && (guessObj[`w${j}`].initial === answerObj[`w${i}`].initial)) {
                    resultObj.result[j].status = constant.placeInitial
                    isCheckedTemp = true
                    givenHints[`w${j}`] = true
                }
            }
    
            // Check final
            for (let j = 0; j < 4; j++) {
                if ((givenHints[`w${j}`] !== true) && (guessObj[`w${j}`].final === answerObj[`w${i}`].final)) {
                    resultObj.result[j].status = constant.placeFinal
                    isCheckedTemp = true
                    givenHints[`w${j}`] = true
                }
            }
    
            isChecked[`w${i}`] = isCheckedTemp
        }
    }
    */

    return resultObj
}

const validate = {
    exist,
    guess,
    correct,
    guessValidatorOld,
    guessValidator,
    first,
}

export default validate