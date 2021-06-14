const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')
const authRequired = require('../helpers/authRequired')

router.post('/login', authController.login)
router.get('/current-user', authRequired, authController.currentUser)

module.exports = router
