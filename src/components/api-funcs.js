import axios from 'axios'
const { APIToken } = require('../secrets')

export const getSearchResults = async (title) => {
  try {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${APIToken}&s=${title}&type=movie`)
    //console.log('axios', data)
    return data
  } catch (err) {
    console.error(err)
  }
}



