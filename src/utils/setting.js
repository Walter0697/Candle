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
}

export default setting