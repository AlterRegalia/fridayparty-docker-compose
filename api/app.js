const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/todos', (req, res) => {
  res.send([{title: 'docker compose 101 - friday party', done: false}])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})