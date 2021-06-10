module.exports = {
    // Get all users
    // [GET] /
    index(req, res) {
        res.json([
            'All users'
        ])
    },

    // Create a user
    // [POST] /
    store(req, res) {
        // 1. Nhận thông tin user từ body request
        // 2. Import User model và tạo user mới từ thông tin (1)
        // 3. Nhận lại user vừa tạo từ model và response về cho client
        const result = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        }

        res.status(201).json({
            data: result
        })
    },

    // Get a user by ID
    // [GET] /:id
    show(req, res) {
        res.json([
            'A user'
        ])
    },

    // Update a user
    // [PUT] /:id
    update(req, res) {
        res.json([
            'Update user'
        ])
    },

    // Delete a user
    // [PUT] /:id
    destroy(req, res) {
        res.json([
            'Delete user'
        ])
    }
}