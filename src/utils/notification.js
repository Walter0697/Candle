import validate from './validate'

let fwCount = 0

const fourWord = (date) => {
    fwCount++
    if (fwCount === 803) {
        return validate.last(date)
        // provide hint and give out first letter
    }
    switch(fwCount) {
        case 50:
            return '師兄有咩諗唔通'
        case 65:
            return '試下冷靜啲諗下'
        case 70:
            return '係咁撳都無用嫁啵'
        case 100:
            return '你撳左一百下啦啵'
        case 120:
            return '有無諗過個掣既感受'
        case 150:
            return '定係你唔識數數字？'
        case 180: 
            return '諗唔到可以查下字典'
        case 200:
            return '你係咪真係咁堅持'
        case 250:
            return '係咪我解釋得唔夠'
        case 251:
            return '四個字姐係'
        case 252:
            return '四個格仔都填矖'
        case 253:
            return '唔係一格唔係兩格'
        case 254:
            return '又唔係三格'
        case 255:
            return '係四個格仔都要填'
        case 300:
            return '其實你係咪想睇'
        case 301:
            return '我會講啲咩'
        case 400:
            return '無用嫁啵'
        case 401:
            return '我又唔會講答案'
        case 500:
            return '呢句最後啦'
        case 501:
            return '你再禁我都只會講'
        case 800:
            return '你都幾痴線'
        case 801:
            return 'Fine我認輸'
        case 802:
            return '比最後一隻字你'
        default:
            return '唔夠四個字啵'
    }
}

const notInWordList = () => {
    fwCount = 0
    return '我個字典無呢個字'
}

const emptyWord = () => {
    return '你都無打字'
}

const multipleWord = () => {
    return '夠矖四個字啦啵'
}

const notification = {
    fourWord,
    notInWordList,
    emptyWord,
    multipleWord,
}

export default notification