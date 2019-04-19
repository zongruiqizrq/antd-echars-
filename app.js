// 引入系统配置文件

const fs = require('fs')
const path = require('path')
const express = require('express')
const process = require('process')
const app = express()

const username = 'zong'
const password = 'zong'

async function apiLogin(req, res) {
    const body = req.body
    if (body && body.username && body.password) {
        if (body.username === username && body.password === password) {
            return res.json({
                success: true,
            })
        }
    }
    return res.json({
        success: true,
    })
}
app.use('/api/login', apiLogin)

app.listen(8080)
module.exports = app