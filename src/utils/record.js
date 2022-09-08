import dayjs from 'dayjs'
import config from './configuration'
const gameLaunchTime = config.gameLaunchTime

const zeroPad = (num, places) => {
    const zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join('0') + num;
}

const getTodayNumber = () => {
    const startDate = dayjs(gameLaunchTime, "MM-DD-YYYY HH:mm:ss")
    const today = dayjs()
    const days = today.diff(startDate, 'day')
    const dayStr = zeroPad(days, 3)
    return dayStr
}

const isRecordToday = (today) => {
    const date = localStorage.getItem('date')
    return date === today
}

const loadCurrentStatus = () => {
    const status = localStorage.getItem('status')
    return status
}

const parseCurrentRecord = (data, currentIndex, pending) => {
    const list = JSON.parse(JSON.stringify(data))
    const currentRowList = list[currentIndex]
    for (let i = 0; i < 4; i++) {
        const word = currentRowList[i].word
        const status = pending[i].status
        const sameWord = pending[i].sameWord
        const hasWord = pending[i].hasWord
        const hasSameWord = pending[i].hasSameWord
        const shouldSplit = pending[i].shouldSplit
        const pronounce = pending[i].pronounce
        currentRowList[i] = { 
            word: word, 
            status: status, 
            pronounce: pronounce, 
            sameWord: sameWord,
            hasWord: hasWord,
            shouldSplit: shouldSplit,
            hasSameWord: hasSameWord, 
        }
    }
    list[currentIndex] = currentRowList
    return list
}

const resetStatus = () => {
    localStorage.setItem('status', '')
}

const saveCurrentRecord = (data, today) => {
    localStorage.setItem('date', today)
    localStorage.setItem('progress', JSON.stringify(data))
}

const loadCurrentRecord = () => {
    const data = localStorage.getItem('progress')
    if (data) {
        return JSON.parse(data)
    }
    return null
}

const getRecordDate = () => {
    const date = localStorage.getItem('date')
    return date
}

const getHistory = () => {
    const history = localStorage.getItem('history')
    if (history) {
        return JSON.parse(history)
    }
    return []
}

const saveWinRecord = (date, row) => {
    localStorage.setItem('status', 'win')
    const history = getHistory()
    history.push({ date, row })
    localStorage.setItem('history', JSON.stringify(history))
}

const saveLossRecord = (date) => {
    localStorage.setItem('status', 'loss')
    const history = getHistory()
    history.push({ date, row: -1 })
    localStorage.setItem('history', JSON.stringify(history))
}

const record = {
    parse: parseCurrentRecord,
    save: saveCurrentRecord,
    load: loadCurrentRecord,
    get_date: getRecordDate,
    reset_status: resetStatus,
    status: loadCurrentStatus,
    date: getTodayNumber,
    is_today: isRecordToday,
    win: saveWinRecord,
    loss: saveLossRecord,
    history: getHistory,
}

export default record