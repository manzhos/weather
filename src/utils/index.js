export const capitalizeFirstLetter = (str) => {
  if (!str) return ''

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const timeFromTS = (ts) => {
  if (!ts) return ''

  const date = new Date(ts*1000);
  return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}