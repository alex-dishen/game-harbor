import { GameTypes, RAWGResponseT } from 'api/types'

const currentDate = new Date()

const formatDate = (date: Date) => date.toISOString().replace(/T.*/, '')

export const previousYear = currentDate.getFullYear() - 1

export const getLast30Days = () => {
  const dateCpy = new Date(currentDate.getTime())

  const pastDay = new Date(
    dateCpy.getFullYear(),
    dateCpy.getMonth(),
    dateCpy.getDate() - 30,
  )

  return `${formatDate(pastDay)},${formatDate(currentDate)}`
}

export const getThisWeek = () => {
  const previousMonday = new Date()

  previousMonday.setDate(
    currentDate.getDate() - ((currentDate.getDay() + 6) % 7),
  )

  const thisSunday = new Date(
    previousMonday.getFullYear(),
    previousMonday.getMonth(),
    previousMonday.getDate() + 7,
  )

  return `${formatDate(previousMonday)},${formatDate(thisSunday)}`
}

export const getNextWeek = () => {
  const dateCpy = new Date(currentDate.getTime())

  const nextMonday = new Date(
    dateCpy.setDate(dateCpy.getDate() + ((7 - dateCpy.getDay() + 1) % 7 || 7)),
  )

  const nextSunday = new Date(
    nextMonday.getFullYear(),
    nextMonday.getMonth(),
    nextMonday.getDate() + 7,
  )

  return `${formatDate(nextMonday)},${formatDate(nextSunday)}`
}

export const getThisYear = () => {
  const thisYear = new Date().getFullYear()

  return `${thisYear}-01-01,${thisYear}-12-31`
}

export const getPreviousYear = () => {
  const thisYear = new Date().getFullYear()

  return `${thisYear - 1}-01-01,${thisYear - 1}-12-31`
}

export const getPrice = (game: RAWGResponseT) => {
  const { released } = game
  const releaseYear = new Date(released).getFullYear()
  const currentYear = new Date().getFullYear()
  const yearsDifference = currentYear - releaseYear
  let randomNumber = Math.floor(Math.random() * 21)
  const minPrice = 1
  let discountPerYear = 0.35
  let newPrice = randomNumber <= 10 ? 20 : 45
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < yearsDifference; i++) {
    randomNumber = Math.floor(Math.random() * 21)
    newPrice *= 1 - discountPerYear

    if (discountPerYear > 0.1) {
      discountPerYear -= 0.08
    } else {
      discountPerYear = 0.1
    }
  }
  newPrice = Math.ceil(newPrice)
  newPrice = newPrice < minPrice ? minPrice : newPrice

  return newPrice - 0.02
}
