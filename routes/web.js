const webController = require('../app/controllers/webController')
const router = require('express').Router()


router.get('/index' , webController.index)


module.exports  = router