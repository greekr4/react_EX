
const express = require('express')
const app = express()

const server = app.listen(4000, () => {
    console.log('server start, port 4000')
})

const oracledb = require('oracledb')
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

app.get('/select', function(req, res) {
    getSelect(req, res)
})

app.post('/',function(req,res) {
    console.log(req.sendData);

    //getSelect2(req,res,num);
})



async function getSelect(req, res) {
    let connection
    try {
        connection = await oracledb.getConnection({
            user          : "c##tk",
            password      : "1234",
            connectString : "localhost/ORCL"
        })

        const result = await connection.execute(
            `SELECT * 
            FROM BOARD
            `
        )

        console.log(result)
        res.send(result.rows)
    } catch (error) {
        console.log(error)
    } finally {
        if (connection) {
            try {
                await connection.close()
            } catch (error) {
                console.log(error)
            }
        }
    }
}

async function getSelect2(req, res,num) {
    let connection
    try {
        connection = await oracledb.getConnection({
            user          : "c##tk",
            password      : "1234",
            connectString : "localhost/ORCL"
        })

        const result = await connection.execute(
            `SELECT * 
            FROM BOARD
            ` 
        );

        console.log(result)
        res.send(result.rows)
    } catch (error) {
        console.log(error)
    } finally {
        if (connection) {
            try {
                await connection.close()
            } catch (error) {
                console.log(error)
            }
        }
    }
}