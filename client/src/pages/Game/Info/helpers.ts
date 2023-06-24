export const setEmptyOrComa = (index: number, array: []) =>
  index + 1 === array.length ? '' : ', '
