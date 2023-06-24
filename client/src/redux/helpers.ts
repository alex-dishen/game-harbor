import { GameTypes } from 'api/types'

export const saveToLocalStorage = (
  name: string,
  item: string | number | GameTypes[],
) => localStorage.setItem(name, JSON.stringify(item))
