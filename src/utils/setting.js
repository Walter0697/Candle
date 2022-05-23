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



const setting = {
    load: loadRecord,
    save: saveRecord,
}

export default setting