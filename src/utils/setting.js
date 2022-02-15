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
    return {
        correct: '🟢',
        incorrect: '🌚',
        place: '🌕',
        initial: '🌗',
        final: '🌓',
        tone: '🤢'
    }
}

const setting = {
    emoji_list: getShareEmojiList,
    load: loadRecord,
    save: saveRecord,
}

export default setting