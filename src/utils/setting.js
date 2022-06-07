const tutorialWordList = [
    {
        idiom: '拍一半拖',
        w0: { initial: 'p', final: 'aak', tone: '3' },
        w1: { initial: 'j', final: 'at', tone: '1' },
        w2: { initial: 'b', final: 'un', tone: '3' },
        w3: { initial: 't', final: 'o', tone: '1' }
    }, 
    {
        idiom: '回眸一笑',
        w0: { initial: 'w', final: 'ui', tone: '4' },
        w1: { initial: 'm', final: 'au', tone: '4' },
        w2: { initial: 'j', final: 'at', tone: '1' },
        w3: { initial: 's', final: 'iu', tone: '3' }
    }, 
    {
        idiom: '永久保存',
        w0: { initial: 'w', final: 'ing', tone: '5' },
        w1: { initial: 'g', final: 'au', tone: '2' },
        w2: { initial: 'b', final: 'ou', tone: '2' },
        w3: { initial: 'c', final: 'yon', tone: '4' }
    }, 
    {
        idiom: '一字一淚',
        w0: { initial: 'j', final: 'at', tone: '1' },
        w1: { initial: 'z', final: 'i', tone: '6' },
        w2: { initial: 'j', final: 'at', tone: '1' },
        w3: { initial: 'l', final: 'eoi', tone: '6' }
    }, 
    {
        idiom: '別怕失去',
        w0: { initial: 'b', final: 'it', tone: '6' },
        w1: { initial: 'p', final: 'a', tone: '3' },
        w2: { initial: 's', final: 'at', tone: '1' },
        w3: { initial: 'h', final: 'eoi', tone: '3' }
    }, 
    {
        idiom: '你瞞我瞞',
        w0: { initial: 'n', final: 'ei', tone: '5' },
        w1: { initial: 'm', final: 'un', tone: '4' },
        w2: { initial: 'ng', final: 'o', tone: '5' },
        w3: { initial: 'm', final: 'un', tone: '4' }
    }, 
    {
        idiom: '別來無恙',
        w0: { initial: 'b', final: 'it', tone: '6' },
        w1: { initial: 'l', final: 'oi', tone: '4' },
        w2: { initial: 'm', final: 'ou', tone: '4' },
        w3: { initial: 'j', final: 'oeng', tone: '6' }
    }, 
    {
        idiom: '霸氣情歌',
        w0: { initial: 'b', final: 'aa', tone: '3' },
        w1: { initial: 'h', final: 'ei', tone: '3' },
        w2: { initial: 'c', final: 'ing', tone: '4' },
        w3: { initial: 'g', final: 'o', tone: '1' }
    }, 
    {
        idiom: '認真如初',
        w0: { initial: 'j', final: 'ing', tone: '6' },
        w1: { initial: 'z', final: 'an', tone: '1' },
        w2: { initial: 'j', final: 'yu', tone: '4' },
        w3: { initial: 'c', final: 'o', tone: '1' }
    }, 
    {
        idiom: '告別之前',
        w0: { initial: 'g', final: 'ou', tone: '3' },
        w1: { initial: 'b', final: 'it', tone: '6' },
        w2: { initial: 'z', final: 'i', tone: '1' },
        w3: { initial: 'c', final: 'in', tone: '4' }
    }, 
    {
        idiom: '斷絕來往',
        w0: { initial: 'd', final: 'yun', tone: '6' },
        w1: { initial: 'z', final: 'yut', tone: '6' },
        w2: { initial: 'l', final: 'oi', tone: '4' },
        w3: { initial: 'w', final: 'ong', tone: '5' }
    }, 
    {
        idiom: '閱後即焚',
        w0: { initial: 'j', final: 'yut', tone: '6' },
        w1: { initial: 'h', final: 'au', tone: '6' },
        w2: { initial: 'z', final: 'ik', tone: '1' },
        w3: { initial: 'f', final: 'an', tone: '4' }
    },
    {
        idiom: '請跟我走',
        w0: { initial: 'c', final: 'ing', tone: '2' },
        w1: { initial: 'g', final: 'an', tone: '1' },
        w2: { initial: 'ng', final: 'o', tone: '5' },
        w3: { initial: 'z', final: 'au', tone: '2' }
    }, 
    {
        idiom: '交叉神經',
        w0: { initial: 'g', final: 'aau', tone: '1' },
        w1: { initial: 'c', final: 'aa', tone: '1' },
        w2: { initial: 's', final: 'an', tone: '4' },
        w3: { initial: 'g', final: 'ing', tone: '1' }
    }, 
]

const yellowTutorialList = {
    guess: {
        idiom: '出奇制勝',
        w0: { initial: 'c', final: 'eot', tone: '1' },
        w1: { initial: 'k', final: 'ei', tone: '4' },
        w2: { initial: 'z', final: 'ai', tone: '3' },
        w3: { initial: 's', final: 'ing', tone: '1' }
    },
    answer: {
        idiom: '心甘情願',
        w0: { word: '心', initial: 's', final: 'am', tone: '1' },
        w1: { word: '甘', initial: 'g', final: 'am', tone: '1' },
        w2: { word: '情', initial: 'c', final: 'ing', tone: '4' },
        w3: { word: '願', initial: 'j', final: 'yun', tone: '6' }
    },
    status: {
        w0: 'yxg', 
        w1: 'xxy',
        w2: 'xxx',
        w3: 'yyy',
    },
    yellowStatus: {
        initial: 0,
        final: 2,
        tone: 1,
    }
}

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

const getYellowTutorial = () => {
    return yellowTutorialList
}

const setting = {
    load: loadRecord,
    save: saveRecord,
    rand_tutorial: getRandomTutorialWords,
    yellow_tutorial: getYellowTutorial,
}

export default setting