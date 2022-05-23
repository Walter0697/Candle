const tutorialWordList = [{
    idiom: '認真如初',
    w0: {
        initial: 'j',
        final: 'ing',
        tone: '6'
    },
    w1: {
        initial: 'z',
        final: 'an',
        tone: '1'
    },
    w2: {
        initial: 'j',
        final: 'yu',
        tone: '4'
    },
    w3: {
        initial: 'c',
        final: 'o',
        tone: '1'
    }
}, {
    idiom: '斷絕來往',
    w0: {
        initial: 't',
        final: 'yun',
        tone: '5'
    },
    w1: {
        initial: 'z',
        final: 'yut',
        tone: '6'
    },
    w2: {
        initial: 'l',
        final: 'oi',
        tone: '4'
    },
    w3: {
        initial: 'w',
        final: 'ong',
        tone: '5'
    }
}, {
    idiom: '別來無恙',
    w0: {
        initial: 'b',
        final: 'it',
        tone: '6'
    },
    w1: {
        initial: 'l',
        final: 'oi',
        tone: '4'
    },
    w2: {
        initial: 'm',
        final: 'ou',
        tone: '4'
    },
    w3: {
        initial: 'j',
        final: 'oeng',
        tone: '6'
    }
}, {
    idiom: '永久保存',
    w0: {
        initial: 'w',
        final: 'ing',
        tone: '5'
    },
    w1: {
        initial: 'g',
        final: 'au',
        tone: '2'
    },
    w2: {
        initial: 'b',
        final: 'ou',
        tone: '2'
    },
    w3: {
        initial: 'c',
        final: 'yun',
        tone: '4'
    }
}, {
    idiom: '閱後即焚',
    w0: {
        initial: 'j',
        final: 'yut',
        tone: '6'
    },
    w1: {
        initial: 'h',
        final: 'au',
        tone: '6'
    },
    w2: {
        initial: 'z',
        final: 'ik',
        tone: '1'
    },
    w3: {
        initial: 'f',
        final: 'an',
        tone: '4'
    }
}, {
    idiom: '回眸一笑',
    w0: {
        initial: 'w',
        final: 'ui',
        tone: '4'
    },
    w1: {
        initial: 'm',
        final: 'au',
        tone: '4'
    },
    w2: {
        initial: 'j',
        final: 'at',
        tone: '1'
    },
    w3: {
        initial: 's',
        final: 'iu',
        tone: '3'
    }
},
]

const loadRecord = () => {
    const setting = localStorage.getItem('setting')
    if (setting) {
        return JSON.parse(setting)
    }
    return {}
}

const saveRecord = (field, value) => {
    let setting = loadRecord()
    setting[field] = value
    localStorage.setItem('setting', JSON.stringify(setting))
}

const getRandomTutorialWords = () => {
    let indexList = tutorialWordList.map((item, index) => index)
    indexList.sort(() => { return 0.5 - Math.random() })
    return indexList.map((num, index) => tutorialWordList[num])
}

const setting = {
    load: loadRecord,
    save: saveRecord,
    rand_tutorial: getRandomTutorialWords,
}

export default setting