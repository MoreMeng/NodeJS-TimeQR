const Query = require("../models/query.model")

exports.checkInOut = (req, res) => {

    // console.log(req.body.line_userid)
    let userid = req.body.userid;
    let usergps = req.body.usergps;
    // let userid = 326;
    let sqlstm = `INSERT INTO CHECKINOUT ( Badgenumber, CHECKTIME, CHECKTYPE, VERIFYCODE, SENSORID, WorkCode, sn, gps) VALUES ('${userid}',GETDATE(),'I',0,3,1,'S','${usergps}');`
    Query.executeQuery(sqlstm, res)
}