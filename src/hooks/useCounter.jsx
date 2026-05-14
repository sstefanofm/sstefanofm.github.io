import { useState } from 'react'

export const useCounter = (
  initialValue = 0,
  onlyPositive = false,
  maxValue = 1000,
) => {
  const minValue = onlyPositive ? 1 : -Infinity

  const clampValue = (value) => {
    const n = Number(value)

    if (isNaN(n))
      return minValue
    if (n < minValue)
      return minValue
    if (n > maxValue)
      return maxValue
    return n
  }

  const [counterState, setCounterState] = useState( clampValue(initialValue) )

  const setCounter = (value) => {
    setCounterState(prev => {
      const nextValue =
        typeof value === 'function' /* incrementCounter / decrementCounter / other */
          ? value(prev)
          : value

      return clampValue(nextValue)
    })
  }

  const incrementCounter = () => {
    setCounter(prev => prev + 1)
  }

  const decrementCounter = () => {
    setCounter(prev => prev - 1)
  }

  return {
    counter: counterState,
    setCounter,
    incrementCounter,
    decrementCounter,
  }
}

