import { useState } from 'react'

export const useCounter = (initialValue = 0, onlyPositive = false, maxValue = 1000) => {
  const [counter, setCounter] = useState(initialValue)

  const incrementCounter = () => {
    setCounter(prev => {
      if (prev >= maxValue)
        return maxValue
      return prev + 1
    })
  }

  const decrementCounter = () => {
    setCounter(prev => {
      if (onlyPositive && prev <= 1)
        return prev
      return prev - 1
    })
  }

  return {
    counter,
    incrementCounter,
    decrementCounter,
  }
}

