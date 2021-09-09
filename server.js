//import's
require('dotenv').config()
const express = require('express')
const connectDB = require('./app/config/connectDB')
const app = express()
const port = process.env.PORT || 5000
const apiRouter = require("./routes/api")
const webRouter = require("./routes/web")
const colors = require('colors')
const expressLayouts = require('express-ejs-layouts');
//DB CONNNECTION

//First provide the connection URL of mongoDb in .env file
// connectDB()

//PUGLIN'S
app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(expressLayouts);
//ROUTE's
app.use(webRouter)
app.use("/api",apiRouter)

app.listen(port , ()=> console.log(`> App is running on: ${port}`.bgGreen.white))