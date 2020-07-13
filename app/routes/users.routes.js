module.exports = app => {
    const routes = require(`../controllers/users.controller`)

    app.get('/users', routes.listUser)
    app.post('/users/:userid', routes.addUser)
}