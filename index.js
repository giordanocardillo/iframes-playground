const express = require('express')
const path = require('path')
const app = express()
const PORT = 4000


app.get('/sameorigin', (req, res) => {
  res.set({
    'X-Frame-Options': 'SAMEORIGIN'
  })
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/deny', (req, res) => {
  res.set({
    'X-Frame-Options': 'DENY'
  })
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})
