const express = require('express')
const showData = require('./showData')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  return response.render('index', { showData })
})

app.get('/season/:id', (request, response) => {
  const { id } = request.params
  const season = showData.seasons.find((season) => season.number === parseInt(id))

  return response.render('season', { season, showData })
})


app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(7825, () => {
  console.log('listening on port 7825')// eslint-disable-line no-console
})
