const Query = require("../models/query.model")

exports.checkInOut = (req, res) => {

    // console.log(req.body.line_userid)
    let userid = req.body.userid;
    let usergps = req.body.usergps;
    let userdistance = req.body.userdistance;
    // let userid = 326;
    let sqlstm = `INSERT INTO CHECKINOUT ( Badgenumber, CHECKTIME, CHECKTYPE, VERIFYCODE, SENSORID, WorkCode, sn, gps, distance) VALUES ('${userid}',GETDATE(),'I',0,3,1,'S','${usergps}', '${userdistance}');`
    Query.executeQuery(sqlstm, res)
}