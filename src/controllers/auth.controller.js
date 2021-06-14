const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const jwtConfig = require('../config/jwt')

module.exports = {
    // [POST] /login
    async login(req, res) {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        })
        if (user) {
            const token = jwt.sign({ sub: user.id }, jwtConfig.secret, {
                expiresIn: jwtConfig.expiresIn
            });
            res.json({
                data: { token }
            })
        } else {
            res.status(401).json({
                code: 401,
                message: "Unauthorized"
            })
        }
    },

    // [POST] /current-user
    async currentUser(req, res) {
        res.json({
            data: req.user
        })
    }
}