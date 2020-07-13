const { poolPromise } = require("./db")

const Query = {}

Query.executeQuery = async (sqlstm, result) => {

    if (process.env.NODE_ENV === 'development')
        console.log(`\x1b[90m%s\x1b[0m`,`sql: ${sqlstm}`);

    try {
        const pool = await poolPromise
        const poolRequest = await pool.request()
            .query(sqlstm, (err, rs) => {
                if (err) {
                    console.log(`Error while querying database :- ${err}`)
                    result.send(err)
                } else {

                    // console.log(rs)
                    result.send(rs)
                    // result.send(rs.recordsets)
                    // result(null, rs.recordset)
                }
            })

        //   res.json(result.recordset)
    } catch (err) {
        result.status(500)
        result.send(err.message)
    }
}

module.exports = Query