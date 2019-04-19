/**
 * 用户相关API
 */

import { app } from '../app'
// import logger from '../logger'
// import getClientIp from './getClientIp'

const username = 'zong'
const password = 'zong'

/**
 * 用户登录(临时)
 */
export async function apiLogin(req, res) {
    // let ip = getClientIp(req)
    // logger.trace({
    //     module:'user.apiLogin',
    //     ip:ip,
    //     msg:'user.apiLogin is being tracked'
    // })
    // const body = req.body
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
}
app.use('/api/login', apiLogin)
