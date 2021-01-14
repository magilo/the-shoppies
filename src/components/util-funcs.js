export const movieExists = (imdbID, list) => {
  //console.log('movie exists', imdbID, list)
  for (let i = 0; i < list.length; i++) {
    if (imdbID === list[i].imdbID) {
      //console.log(imdbID, list[i].imdbID)
      return true
    }
  }

  return false
}

