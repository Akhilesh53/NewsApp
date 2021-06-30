var express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 5000


//#region  Static Files
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/images',express.static(__dirname + 'public/images'))
app.use('/js',express.static(__dirname + 'public/js'))
//#endregion

//#region  Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')
//#endregion

app.use(bodyParser.urlencoded({extended : true}))

//Routes
const newsRouter = require('./src/routes/news')


app.use('/',newsRouter)
app.use('/article',newsRouter)






//Listen on port 5000
app.listen(port , ()=> console.log('Listing on port 5000'))
