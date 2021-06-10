const express = require('express')
const morgan = require('morgan')
const routes = require('./src/routes')
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())
app.use(morgan('combined'))
app.use('/assets', express.static('public'))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// routes
routes(app)

app.listen(port, () => {
  console.log(`F8 blog app listening at http://localhost:${port}`)
})
