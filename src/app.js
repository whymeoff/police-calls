require('dotenv').config()
require('./hbsConfig')
require('./db/mongoose')
const express = require('express')
const hbs = require('hbs')
const path = require('path')
const app = express()

const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Define path for express config
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(path.join(__dirname, '../public')))

app.use('/admin', require('./routers/admin'))
app.use('/calls', require('./routers/calls'))
app.get('/', (req, res) => res.render('index'))

app.listen(PORT, () => {
    console.log('Server is up on port ' + PORT)
})