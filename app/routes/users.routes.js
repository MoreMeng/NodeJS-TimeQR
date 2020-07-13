module.exports = app => {
    const routes = require(`../controllers/users.controller`)

    app.get('/users/:name', routes.listUser)
    app.post('/search', routes.searchLineId)
    app.post('/users', routes.addUser)
}