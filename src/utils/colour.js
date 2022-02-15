const baseColour = '#303030'

const colourList = {
    inactive: {
        normal: { colour: '#191b20', type: 'single' },
        contrast: { colour: '#191b20', type: 'single' },
    },
    correct: {
        normal: { colour: '#538d4e', type: 'single' },
        contrast: { colour: '#f5793a', type: 'single' },
    },
    place: {
        normal: { colour: '#b59f3b', type: 'single' },
        contrast: { colour: '#85c0f9', type: 'single' },
    },
    incorrect: {
        normal: { colour: '#303030', type: 'single' },
        contrast: { colour: '#303030', type: 'single' },
    },
    initial: {
        normal: { colour: '#b59f3b', type: 'left' },
        contrast: { colour: '#85c0f9', type: 'left' },
    },
    final: {
        normal: { colour: '#b59f3b', type: 'right' },
        contrast: { colour: '#85c0f9', type: 'right' },
    },
    tone: {
        normal: { colour: '#994dad', type: 'single' },
        contrast: { colour: '#cc00ff', type: 'top' },
    }
}

const getColourData = (type, isContrast) => {
    const current = colourList[type]
    if (current) {
        if (isContrast) {
            return current.contrast
        }
        return current.normal
    } 
    return null
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