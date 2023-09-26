export const createModifiers = (modifiers = []) => {
  return modifiers
    .map(m => `Icon--${m}`)
    .toString()
    .replace(',', ' ')
}
