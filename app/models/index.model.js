const { poolPromise }  = require("./db")

const Index = {}

Index.getProp = async result => {
    console.log(`Index Model`);

    let query = `SELECT DB_NAME() AS DatabaseName, DATABASEPROPERTYEX('master', 'Status') AS DBStatus`
    try {
      const pool = await poolPromise
      const poolRequest = await pool.request()
          .query(query,(err, rs) => {
            if (err) {
                console.log(`Error while querying database :- ${err}`)
                // res.send(err)
            } else {

                // console.log(rs)
                result(null, rs.recordset)
            }
        })

    //   res.json(result.recordset)
    } catch (err) {
      res.status(500)
      res.send(err.message)
    }
  }

module.exports = Index