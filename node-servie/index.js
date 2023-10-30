const express = require('express')
const app = express()
const port = 3001

app.get('/plugin', (req, res) => {
  res.send({'module': 'http://127.0.0.1:5500/react-components/build/static/js/module.js'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})