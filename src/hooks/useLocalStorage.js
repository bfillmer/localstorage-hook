
import { useState } from 'react'

function useLocalStorage (key, initialValue) {
  const [item, setInnerValue] = useState(() => {
    try {
      return window.localStorage.getItem(key)
        ? JSON.parse(window.localStorage.getItem(key))
        : initialValue
    } catch (_) {
      return initialValue
    }
  })

  function setItem (value) {
    setInnerValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  function removeItem () {
    setInnerValue(null)
    window.localStorage.removeItem(key)
  }

  return {
    item,
    setItem,
    removeItem
  }
}

export default useLocalStorage
