const baseColour = '#303030'

const incorrectColour = {
    normal: '#303030',
    contrast: '#303030',
}
const correctColour = {
    normal: '#538d4e',
    contrast: '#f5793a',
}
const wrongPlaceColour = {
    normal: '#b59f3b',
    contrast: '#85c0f9',
}
const notSameWordColour = {
    normal: '#ff1a1a',
    contrast: '#ff00f8',
}

const getSingleColourData = (data, position, isContrast) => {
    let dataStatus = ''
    let colourData = incorrectColour
    if (position === 'top') {
        dataStatus = data.charAt(2)
    } else if (position === 'left') {
        dataStatus = data.charAt(0)
    } else if (position === 'right') {
        dataStatus = data.charAt(1)
    }

    if (!dataStatus) return ''

    if (dataStatus === 'g') {
        colourData = correctColour
    } else if (dataStatus === 'y') {
        colourData = wrongPlaceColour
    } else {
        colourData = incorrectColour
    }

    if (isContrast) {
        return colourData.contrast
    }
    return colourData.normal
}

const getColourData = (data, isContrast) => {
    if (data.charAt(0) === data.charAt(1)) {
        // if first two is inactive, we will see if tone is correct
        let topColour = incorrectColour
        let bottomColour = incorrectColour

        let topLetter = data.charAt(2)
        if (topLetter === 'g') {
            topColour = correctColour
        } else if (topLetter === 'y') {
            topColour = wrongPlaceColour
        }

        let bottomLetter = data.charAt(0)
        if (bottomLetter === 'g') {
            bottomColour = correctColour
        } else if (bottomLetter === 'y') {
            bottomColour = wrongPlaceColour
        }

        if (isContrast) {
            return topbottom(topColour.contrast, bottomColour.contrast)
        }
        return topbottom(topColour.normal, bottomColour.normal)

    } else {
        let leftColour = incorrectColour
        let rightColour = incorrectColour

        const leftLetter = data.charAt(0)
        const rightLetter = data.charAt(1)
        if (leftLetter === 'g') {
            leftColour = correctColour
        } else if (leftLetter === 'y') {
            leftColour = wrongPlaceColour
        }

        if (rightLetter === 'g') {
            rightColour = correctColour
        } else if (rightLetter === 'y') {
            rightColour = wrongPlaceColour
        }

        if (isContrast) {
            return split(leftColour.contrast, rightColour.contrast)
        }
        return split(leftColour.normal, rightColour.normal)
    }
}

const parseColourData = (c, type) => {
    if (type === 'left') {
        return split(c, baseColour)
    } else if (type === 'right') {
        return split(baseColour, c)
    } else if (type === 'top') {
        return topbottom(c, baseColour)
    }
    return c
}

const split = (colour1, colour2) => {
    const isFirefox = typeof InstallTrigger !== 'undefined'
    const prefix = isFirefox ? '-moz-' : ''
    const degree = isFirefox ? '0deg' : '90deg'
    const gradient = `linear-gradient(${degree}, ${colour1} 0%, ${colour1} 50%, ${colour2} 50%, ${colour2} 100%)`
    return `${prefix}${gradient}`
}

const topbottom = (colour1, colour2) => {
    const isFirefox = typeof InstallTrigger !== 'undefined'
    const prefix = isFirefox ? '-moz-' : ''
    const degree = isFirefox ? '270deg' : '180deg'
    const gradient = `linear-gradient(${degree}, ${colour1} 0%, ${colour1} 40%, ${colour2} 40%, ${colour2} 100%)`
    return `${prefix}${gradient}`
}

const getNonSameWordColour = (isContrast) => {
    if (isContrast) return notSameWordColour.contrast
    return notSameWordColour.normal
}

const getCorrectColour = (isContrast) => {
    if (isContrast) return correctColour.contrast
    return correctColour.normal
}

const getIncorrectColour = (isContrast) => {
    if (isContrast) return incorrectColour.contrast
    return incorrectColour.normal
}

const allColor = (isContrast) => {
    if (isContrast) {
        return {
            incorrect: incorrectColour.contrast,
            correct: correctColour.contrast,
            wrongPlace: wrongPlaceColour.contrast,
            notSameWord: notSameWordColour.contrast,
        }
    }
    
    return {
        incorrect: incorrectColour.normal,
        correct: correctColour.normal,
        wrongPlace: wrongPlaceColour.normal,
        notSameWord: notSameWordColour.normal,
    }
}

const colour = {
    getSingleColourData,
    getColourData,
    parseColourData,
    getNonSameWordColour,
    getCorrectColour,
    getIncorrectColour,
    allColor,
}

export default colour