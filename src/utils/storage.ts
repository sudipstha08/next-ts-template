/**
 * @param key -> name of the KEY you want to get the value of
 * @returns -> KEYs value
 */
const getItemFromLocalStorage = <T>(key: string): T | undefined => {
  try {
    const serializedState = localStorage?.getItem(key)
    if (!serializedState) return undefined
    return JSON.parse(serializedState)
  } catch (error) {
    return undefined
  }
}

/**
 * @param key -> name of the key you want to SET the value of
 * @returns -> boolean
 */
const saveItemToLocalStorage = <T>(key: string, value: T): any => {
  try {
    const serializedState = JSON.stringify(value)
    localStorage?.setItem(key, serializedState)
    return true
  } catch (error) {
    return false
  }
}

/**
 * @param key -> name of the key you want to REMOVE
 * @returns -> undefined
 */
const removeItemFromLocalStorage = (key: string): undefined => {
  try {
    localStorage?.removeItem(key)
  } catch (error) {
    return undefined
  }
}

/**
 * Remove all items from local storage
 */
const clearLocalStorage = async () => {
  try {
    if (typeof window !== 'undefined') {
      await localStorage?.clear()
    }
  } catch (err) {
    return undefined
  }
}

export {
  getItemFromLocalStorage,
  saveItemToLocalStorage,
  removeItemFromLocalStorage,
  clearLocalStorage,
}
