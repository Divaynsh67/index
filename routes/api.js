const apiController = require('../app/controllers/apiController')

const router = require('express').Router()


router.get("/",apiController.index)


module.exports  = router