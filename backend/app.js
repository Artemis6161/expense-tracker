const express = require('express')
const cors = require ('cors')
const { db } =require('./db/db')
const {readdirSync} = require('fs')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
// middlewares
app.use(express.json())
app.use(cors())
// router
readdirSync('./routes').map((route)=> app.use('/api/v1',require('./routes/' + route)))
// test localhost
// app.get('/',(req,res)=>{
//     res.send('hello world')
// })
const server = () => {
    db()
app.listen(PORT, ()=>{
    console.log('listning to port:', PORT);
})
}
server()

// test db
// {
//     "title": "expense test",
//     "amount":"1000",
//     "category":"test",
//     "description":"my income",
//     "date":"1:10:2014"
//   }