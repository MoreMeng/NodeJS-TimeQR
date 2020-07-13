module.exports = app => {
    const routes = require(`../controllers/checkin.controller`)

    // app.get('/checkin', routes.listUser)
    // {
    //     "userid": "326",
    //     "usergps": "14.5752941,100.4421416"
    // }

    app.post('/checkin', routes.checkInOut)
}