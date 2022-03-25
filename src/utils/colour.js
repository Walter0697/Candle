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

const getColourData = (data, isContrast) => {
    if (data.startsWith('xx')) {
        // if first two is inactive, we will see if tone is correct
        let topColour = incorrectColour

        let topLetter = data.charAt(2)
        if (topLetter === 'g') {
            topColour = correctColour
        } else if (topLetter === 'y') {
            topColour = wrongPlaceColour
        }

        if (isContrast) {
            return topbottom(topColour.contrast, incorrectColour.contrast)
        }
        return topbottom(topColour.normal, incorrectColour.normal)

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

// 270deg for top one

const colour = {
    getColourData,
    parseColourData,
}

export default colour