

const express = require("express");
// const app = require("app");

// import { app } from './app'
// import './api'


// app.use(express.static(__dirname + '/public'))

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public/index.html')
// })

const app = express() 
const username = 'zong'
const password = 'zong'
app.post('/api/login', (req, res) => {
    const body = req.body
    if (body && body.username && body.password) {
        if (body.username === username && body.password === password) {
            return res.json({
                success: true,
            })
        }
    }
    return res.json({
        success: false,
    })
})

// const PORT = process.env.AINEWS_PORT || 8080

app.listen(8080)
