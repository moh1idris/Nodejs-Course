// const express = require('express')
// const router = express.Router()      //--> setting up the router

// const { login, dashboard} = require('../controllers/main')    //--> login,dashboard comiing from the controllers
 

// router.route('/dashboard').get(dashboard)
// router.route('/login').post(login)

// module.exports = router


////--> after setting up the middleWare auth
const express = require('express')
const router = express.Router()      //--> setting up the router

const { login, dashboard} = require('../controllers/main')    //--> login,dashboard comiing from the controllers
 
const authMiddleware =require('../middleware/auth')

router.route('/dashboard').get(authMiddleware, dashboard)
router.route('/login').post(login)

module.exports = router