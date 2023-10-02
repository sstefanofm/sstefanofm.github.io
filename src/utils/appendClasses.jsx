export const appendClasses = (classes = []) => {
  return classes
    .map(m => `Icon--${m}`)
    .toString()
    .replace(',', ' ')
}
