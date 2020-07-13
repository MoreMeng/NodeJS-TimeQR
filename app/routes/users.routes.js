module.exports = app => {
    const routes = require(`../controllers/users.controller`)

    app.get('/users/:name', routes.listUser)
    app.post('/users/:userid', routes.addUser)
}