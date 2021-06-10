const postsRouter = require('./posts.router')
const commentsRouter = require('./comments.router')
const usersRouter = require('./users.router')

function routes(app) {
    app.use('/api/posts', postsRouter)
    app.use('/api/comments', commentsRouter)
    app.use('/api/users', usersRouter)
}

module.exports = routes
