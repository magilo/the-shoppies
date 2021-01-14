import axios from 'axios'
const { APIToken } = require('../secrets')

export const getSearchResults = async (title) => {
  try {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${APIToken}&s=${title}`)
    //console.log('axios', data)
    return data
  } catch (err) {
    console.error(err)
  }
}



/*
http://www.omdbapi.com/?apikey=[yourkey]&
http://www.omdbapi.com/?apikey=[your-apikey]&s=batman

const { data } = await axios.get(
  `http://www.omdbapi.com/?apikey=${APIToken}&s=${title}`

)

export const loadQuoteThunk = symbol => {
  return async dispatch => {
    try {
      const { data } = await axios.get(
        `https://cloud.iexapis.com/stable/stock/${symbol}/quote?token=${APIToken}`
      )
      dispatch(getQuote(data))
    } catch (error) {
      console.error(error)
      dispatch(getQuote('nodata'))
    }
  }
}
**/
