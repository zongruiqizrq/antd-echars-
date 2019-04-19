
import history from '../history'

// import { requestGet, requestPost } from './request-data'

/**
 * 检查用户是否登录，如果未登录则自动跳转到登录页面
 * 如果登录则返回用户名
 */
export function checkLogin() {
    const t = localStorage.getItem('username')
    if (!t) {
        const { pathname } = document.location
        if (pathname !== '/' && pathname !== '/login') {
            setTimeout(() => history.push(`/login/${encodeURIComponent(pathname)}`), 200)
        } else {
            setTimeout(() => history.push('/login'), 200)
        }
        return null
    }
    return t
}

/**
 * 获取浏览器保存的用户名
 */
export function getUser() {
    return localStorage.getItem('username')
}

/**
 * 登陆成功，保存用户名
 * @param username 用户名
 */
export function loginSuccess(username) {
    localStorage.setItem('username', username)
}

/**
 * 退出登录
 */
export function logout() {
    localStorage.removeItem('username')
}


