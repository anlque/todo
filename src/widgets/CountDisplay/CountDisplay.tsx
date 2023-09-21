import {memo} from 'react'

interface CountDisplayProps {
    count: number
}

export const CountDisplay = memo(({count}: CountDisplayProps)=>{
    const displayCount = count > 1 ? `${count} items left` : `${count} item left`
    return <div className='count'>{displayCount}</div>
})