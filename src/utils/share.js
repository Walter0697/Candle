import config from './configuration'

const imageScale = 3

const imageWidth = 180 * imageScale

const titleHeight = 16 * imageScale
const titleFontStyle = `bold ${titleHeight}px serif`
const titleMarginTop = 15 * imageScale
const titleMarginBottom = 2 * imageScale

const linkHeight = 10 * imageScale
const linkFontStyle = `${linkHeight}px serif`
const linkMarginBottom = 10 * imageScale

const textMarginLeft = 10 * imageScale
const endMarginBottom = 5 * imageScale

const boxSize = 30 * imageScale
const boxBetween = 5 * imageScale
const link = 'https://Walter0697.github.io/Candle'

const get_winning_row = (progress) => {
    let winning_row = 'X'
    for (let i = 0; i < progress.length; i++) {
        const row = progress[i]
        let is_winning_row = true
        for (let j = 0; j < row.length; j++) {
            if (row[j].status !== 'ggg') {
                is_winning_row = false
                break
            }
        }

        if (is_winning_row) {
            winning_row = i + 1
            break
        }
    }

    return winning_row
}

const share_title = (winning_row, date, difficulty) => {
    let shareStr = `粵道 ${date} ${difficulty} ${winning_row}/9\n`
    return shareStr
}

const get_colour_from_info = (colorInfo, status) => {
    if (status === 'g') {
        return colorInfo.correct
    } else if (status === 'y') {
        return colorInfo.wrongPlace
    } else if (status === 'x') {
        return colorInfo.incorrect
    }
    return colorInfo.notSameWord
}

const generate_text = (progress, date, difficulty, colorTile) => {
    const winning_row = get_winning_row(progress)
    const title = share_title(winning_row, date, difficulty)
    
    let shareStr = title
    shareStr += link + '\n\n'

    let progress_row = []
    for (let i = 0; i < progress.length; i++) {
        const row = progress[i]
        let is_winning_row = true
        let current_progress = ''
        for (let j = 0; j < row.length; j++) {
            if (row[j].status !== 'ggg') {
                is_winning_row = false
            }

            if (row[j].status === 'ggg') {
                current_progress += colorTile.correctColor
            } else if (row[j].status === 'xxx') {
                current_progress += colorTile.incorrectColor
            } else {
                current_progress += colorTile.placeColor
            }
        }
        progress_row.push(current_progress)
        if (is_winning_row) {
            break
        }
    }

    shareStr += progress_row.join('\n')

    return shareStr
}

const generate_image = (progress, date, difficulty, colorInfo) => {
    const winning_row = get_winning_row(progress)

    const title = share_title(winning_row, date, difficulty)

    const canvas = document.createElement('canvas')

    let imageHeight = 
        titleMarginTop + titleHeight + titleMarginBottom + 
        linkHeight + linkMarginBottom + endMarginBottom
    const total_row = winning_row === 'X' ? config.maxRow : winning_row
    imageHeight += ( boxBetween + boxSize ) * total_row

    canvas.width = imageWidth
    canvas.height = imageHeight

    const ctx = canvas.getContext('2d')

    ctx.fillStyle = '#191b20'
    ctx.fillRect(0, 0, imageWidth, imageHeight)

    ctx.fillStyle = 'white'
    ctx.font = titleFontStyle
    ctx.fillText(title, textMarginLeft, titleMarginTop + titleHeight)

    const linkCurrent = titleMarginTop + titleHeight + titleMarginBottom + linkHeight
    ctx.font = linkFontStyle
    ctx.fillText(link, textMarginLeft, linkCurrent)

    const allBoxWidth = boxSize * 4 + boxBetween * 3
    const startingPoint = (imageWidth / 2) - (allBoxWidth / 2)
    
    let yAxisCurrent = linkCurrent + linkMarginBottom

    for (let i = 0; i < progress.length; i++) {
        let xAxisCurrent = startingPoint
        const row = progress[i]
        for (let j = 0; j < row.length; j++) {
            const initialStatus = row[j].status.charAt(0)
            const finalStatus = row[j].status.charAt(1)
            const toneStatus = row[j].status.charAt(2)
            const initialColour = get_colour_from_info(colorInfo, initialStatus)
            const finalColour = get_colour_from_info(colorInfo, finalStatus)
            const toneColour = get_colour_from_info(colorInfo, toneStatus)

            let shouldSplit = false
            if (row[j].status === 'yyy' && !row[j].hasWord && !row[j].hasSameWord) shouldSplit = true
            if (row[j].shouldSplit) shouldSplit = true

            if (shouldSplit) {
                const xStart = parseInt(xAxisCurrent)
                const yStart = parseInt(yAxisCurrent)
                const boxSmallSize = parseInt((boxSize / 2) * 0.8)
                const xMid = parseInt(xStart + boxSize - boxSmallSize)
                const yMid = parseInt(yStart + boxSize - boxSmallSize)

                ctx.fillStyle = toneColour
                ctx.fillRect(xStart, yStart, boxSize, boxSmallSize)
                ctx.fillStyle = initialColour
                ctx.fillRect(xStart, yMid, boxSmallSize, boxSmallSize)
                ctx.fillStyle = finalColour
                ctx.fillRect(xMid, yMid, boxSmallSize, boxSmallSize)
            } else {
                const xStart = parseInt(xAxisCurrent)
                const xMid = parseInt(xAxisCurrent + boxSize / 2)
                const yStart = parseInt(yAxisCurrent)
                const yMid = parseInt(yAxisCurrent + boxSize / 2)

                ctx.fillStyle = toneColour
                ctx.fillRect(xStart, yStart, boxSize, boxSize)
                ctx.fillStyle = initialColour
                ctx.fillRect(xStart, yMid, boxSize, boxSize / 2)
                ctx.fillStyle = finalColour
                ctx.fillRect(xMid, yMid, boxSize / 2, boxSize / 2)

                if ((row[j].status === 'yyy' && !row[j].hasSameWord) ||
                    (row[j].status === 'ggg' && !row[j].sameWord)) {
                    const wrongWordColor = get_colour_from_info(colorInfo, '')
                    ctx.strokeStyle = wrongWordColor
                    ctx.strokeRect(xStart, yStart, boxSize, boxSize)
                }
            }
            
            xAxisCurrent += boxSize + boxBetween
        }
        yAxisCurrent += boxSize + boxBetween
    }

    const url = canvas.toDataURL('image/png')
    return url
}

const save_image = (filename, dataURL) => {
    const el = document.createElement('a')
    el.setAttribute('href', dataURL)
    el.setAttribute('download', filename)
    document.body.appendChild(el)
    el.click()
    el.remove()
}

const share_image = async (filename, dataURL) => {
    if (navigator.share) {
        const blob = await (await fetch(dataURL)).blob()
        const filesArray = [
            new File(
                [blob],
                filename,
                {
                    type: blob.type,
                    lastModified: new Date().getTime()
                }
            )
        ]
        const shareData = {
            files: filesArray,
        }
        navigator.share(shareData)
    } else {
        save_image(filename, dataURL)
    }
}

const share_text = async (shareStr, copyCallback, failCallback) => {
    if (navigator.share) {
        await navigator.share({
            text: shareStr,
        })
    } else {
        copy_text(shareStr, copyCallback, failCallback)
    }
}

const copy_text = async (shareStr, copyCallback, failCallback) => {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(shareStr)
        copyCallback()
    } else {
        failCallback()
    }
}

const share = {
    generate_text,
    generate_image,
    save_image,
    copy_text,
    share_image,
    share_text,
}

export default share