import React, { useState, useEffect, useRef } from 'react'

const maxLength = 4

function InputBox({
    setValue,
    clearPrevious,
    currentIndex,
    canInput,
    validating,
    guess,
}) {
    const inputRef = useRef(null)
    const [ compositionStart, setComposition ] = useState(false)
    const [ text, setText ] = useState('')

    const onKeyPress = (e) => {
        e.preventDefault()
        if (!canInput) return
        if (e.keyCode === 8) {
            if (!compositionStart) {
                clearPrevious()
            }
        } else if (e.keyCode === 13) {
            guess()
        }
    }

    const onTextChange = (e) => {
        if (currentIndex === maxLength) return
        if (!canInput) return
        if (compositionStart) {
            setText(e.target.value)
        } else {
            setText('')
        }
    }

    useEffect(() => {
        const onCompsitionStart = (e) => {
            if (currentIndex === maxLength) return
            if (!canInput) return
            setComposition(true)
        }

        const onCompositionEnd = (e) => {
            if (currentIndex === maxLength) return
            if (!canInput) return
            setComposition(false)
            setValue(e.data)
            setText('')
        }

        const inputElement = inputRef.current
        if (inputElement) {
            inputElement.addEventListener('compositionstart', onCompsitionStart)
            inputElement.addEventListener('compositionend', onCompositionEnd)
            inputElement.focus()
        }

        return () => {
            if (inputElement) {
                inputElement.removeEventListener('compositionstart', onCompsitionStart)
                inputElement.removeEventListener('compositionend', onCompositionEnd)
            }
        }
    }, [currentIndex, canInput, setValue])

    useEffect(() => {
        if (canInput) {
            inputRef.current && inputRef.current.focus()
        } else {
            inputRef.current && inputRef.current.blur()
        }
    }, [canInput])

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
            ref={inputRef}
            value={text}
            onChange={onTextChange}
            onKeyUp={onKeyPress}
            //onBlur={() => inputRef.current.focus()}
        />
    )
}

export default InputBox