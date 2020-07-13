const Query = require("../models/query.model")

exports.listUser = (req, res) => {
    // console.log(req.params.name);
    // console.log(req.query.m);

    let sqlstm = `SELECT * FROM [dbo].[_MOREMENG_LIST_USERS] WHERE LINE_ID IS NULL AND Name LIKE '%${req.params.name}%'`
    Query.executeQuery(sqlstm, res)
}

exports.searchLineId = (req, res) => {
    // console.log(req.body.lineId);

    let sqlstm = `SELECT * FROM [dbo].[_MOREMENG_LIST_USERS] WHERE LINE_ID = '${req.body.lineId}'`
    Query.executeQuery(sqlstm, res)
}

exports.addUser = (req, res) => {

    // console.log(req.body.line_userid)

    let sqlstm = `UPDATE USERINFO SET LINE_ID = '${req.body.line_userid}' WHERE USERID = '${req.body.user_id}'`
    Query.executeQuery(sqlstm, res)
}