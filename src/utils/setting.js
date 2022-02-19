const defaultEmojiList = '🟢🌚🌕🌗🌓🟣'

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

const getShareEmojiList = () => {
    let data = {
        correct: '🟢',
        incorrect: '🌚',
        wrongPlace: '🌕',
        rightInitial: '🌗',
        rightFinal: '🌓',
        wrongTone: '🟣',
    }
    const setting = loadRecord()
    if (setting.emoji) {
        if (setting.emoji.length > 0) data.correct = setting.emoji.charAt(0) 
        if (setting.emoji.length > 1) data.incorrect = setting.emoji.charAt(1) 
        if (setting.emoji.length > 2) data.wrongPlace = setting.emoji.charAt(2) 
        if (setting.emoji.length > 3) data.rightInitial = setting.emoji.charAt(3) 
        if (setting.emoji.length > 4) data.rightFinal = setting.emoji.charAt(4) 
        if (setting.emoji.length > 5) data.wrongTone = setting.emoji.charAt(5) 
    }
    return data
}

const setting = {
    default_emoji: defaultEmojiList,
    emoji_list: getShareEmojiList,
    load: loadRecord,
    save: saveRecord,
}

export default setting