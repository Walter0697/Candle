import React from 'react'

function DictionaryTile({
    word
}) {
    return (
        <div className='dictionarybox-wrap'>
            <div className={'dictionarybox'}>
                {word}
            </div>
        </div>
    )
}

export default DictionaryTile