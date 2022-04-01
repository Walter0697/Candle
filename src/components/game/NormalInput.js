import React, { useState, useEffect, useCallback, useRef } from 'react'

const maxLength = 4

function NormalInput({
    setValue,
    clearPrevious,
    currentIndex,
    canInput,
    validating,
    guess,
}) {
    const [ text, setText ] = useState('')

    const onKeyPress = (e) => {
        e.preventDefault()
        if (!canInput) return
        if (e.keyCode === 8) {
            if (text === '') {
                clearPrevious()
            }
        } else if (e.keyCode === 13) {
            if (currentIndex === maxLength) {
                guess()
            } else {
                const success = setValue(text)
                if (success) {
                    setText('')
                }
            }
        }
    }

    const onTextChange = (e) => {
        if (currentIndex === maxLength) return
        if (!canInput) return
        setText(e.target.value)
    }

    const getInputText = () => {
        if (validating) return '幫緊你，幫緊你'
        if (!canInput) return ''
        if (currentIndex === 4) return '撳ENTER估'
        return '要打字，撳呢度'
    }

    return (
        <input 
            className={'input-box'}
            placeholder={getInputText()}
            value={text}
            onChange={onTextChange}
            onKeyUp={onKeyPress}
            //onBlur={() => inputRef.current.focus()}
        />
    )
}

export default NormalInput