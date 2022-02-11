import React, { useState, useEffect, useCallback, useRef } from 'react'

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

    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.addEventListener('compositionstart', onCompsitionStart)
            inputRef.current.addEventListener('compositionend', onCompositionEnd)
            inputRef.current.focus()
        }

        return () => {
            if (inputRef && inputRef.current) {
                inputRef.current.removeEventListener('compositionstart', onCompsitionStart)
                inputRef.current.removeEventListener('compositionend', onCompositionEnd)
            }
        }
    }, [inputRef])

    const getInputText = () => {
        if (validating) return '幫緊你幫緊你'
        if (!canInput) return 'cannot input test'
        if (currentIndex === 4) return '禁enter估'
        return '打字位'
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