import './BinaryTime.css'
import ContentCard from '../ContentCard'

import { useEffect, useState } from 'react'

const getBin = (n = 0) => (n >>> 0).toString(2)
const getTime = () => Math.floor(new Date().getTime() / 1e3)
const getBinaryTime = () => getBin(getTime())

const BinaryTime = () => {
  const [binaryTime, setBinaryTime] = useState(getBinaryTime())

  useEffect(() => {
    const u = setInterval(() => {
      setBinaryTime(getBinaryTime())
    }, 1e3)

    return () => clearInterval(u)
  }, [])

  return (
    <ContentCard>
      <ContentCard.Content>
        <div className='BinaryTime'>
          {binaryTime.split('').map(b => +b).map((b, i) => (
            b ?
              <code key={i}>{b}</code> :
              <span key={i}>{b}</span>
          ))}
        </div>
      </ContentCard.Content>
    </ContentCard>
  )
}

export default BinaryTime
