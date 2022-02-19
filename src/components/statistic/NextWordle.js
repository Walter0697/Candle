import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'

function NextWordle({}) {
    const [ remainingTime, setRemaining ] = useState()

    useEffect(() => {
       updateTime()
       const interval = window.setInterval(() => {
           updateTime(0)
       }, 1000)
       return () => window.clearInterval(interval)
    }, [])

    const zeroPad = (num, places) => {
        const zero = places - num.toString().length + 1;
        return Array(+(zero > 0 && zero)).join('0') + num;
    }

    const updateTime = () => {
        const update = dayjs().second(0).minute(0).hour(0).add(1, 'day')
        const now = dayjs()
        if (update.diff(now, 'second') < 0) {
            window.reload()
        }
        const hour = zeroPad(update.diff(now, 'hour'), 2)
        const minute = zeroPad(update.diff(now, 'minute') % 60, 2)
        const second = zeroPad(update.diff(now, 'second') % 60, 2)
        setRemaining(`${hour}:${minute}:${second}`)
    }

    return (
        <div className={'bottombar-item'}>
            <div className={'nextwordle-title'}>
                下一個粵道
            </div>
            <div className={'nextwordle-time'}>
                {remainingTime}
            </div>
        </div>
    )
}

export default NextWordle