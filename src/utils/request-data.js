/**
 * 封装whatwg标准的fetch函数，提供缓存功能
 */

import * as _ from 'lodash'
import {esIndex} from './es-index'

const GET_CACHE = {}
const POST_CACHE = {}

const copy = (o) => JSON.parse(JSON.stringify(o))

/**
 * Use fetch to get data from remote
 * @param url URL to GET data
 */
export async function requestGet(url, cache= true) {
    if (GET_CACHE.hasOwnProperty(url)) {
        return copy(await GET_CACHE[url])
    }
    const f= new Promise(async (resolve, reject) => {
        try {
            let r = await fetch(url)
            r = await r.json()
            resolve(JSON.parse(JSON.stringify(r)))
        } catch (e) {
            reject(e)
        }
    })
    if (cache) {
        GET_CACHE[url] = f
    }
    return copy(await f)
}

/**
 * Use fetch to post data
 * @param url URL to POST data
 * @param data the data
 */
export async function requestPost(url, data= {}, cache= true) {

    const keyRaw = [url]
    const keys = Object.keys(data)
    keys.sort()
    for (const k of keys) {
        keyRaw.push(k)
        keyRaw.push(data[k])
    }
    const key= JSON.stringify(keyRaw)

    if (POST_CACHE.hasOwnProperty(key)) {
        return copy(await POST_CACHE[key])
    }
    const f = new Promise(async (resolve, reject) => {
        try {
            let r = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    index: esIndex(),
                    ...data,
                }),
            })
            r = await r.json()
            resolve(r)
        } catch (e) {
            reject(e)
        }
    })
    if (cache) {
        POST_CACHE[key] = f
    }
    return copy(await f)
}
