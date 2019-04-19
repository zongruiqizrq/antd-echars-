import * as process from 'process'

const DEFAULT_LIST = [
    process.env.INDEX_NAME || 'news_zh_20181126',
]
console.log('DEFAULT_LIST', DEFAULT_LIST)

/**
 * 返回数据使用的ElasticSearch的index
 */
export function esIndex() {
    let v = localStorage.getItem('es_index') || DEFAULT_LIST[0]
    if (DEFAULT_LIST.indexOf(v) < 0) {
        localStorage.setItem('es_index', DEFAULT_LIST[0])
    }
    return DEFAULT_LIST[0]
}

/**
 * 返回index列表
 */
export function esIndexList() {
    return DEFAULT_LIST
}

/**
 * 设置一个新的esIndex
 */
export function setESIndex(newIndex) {
    if (DEFAULT_LIST.indexOf(newIndex) >= 0 && newIndex !== esIndex()) {
        localStorage.setItem('es_index', newIndex)
        setTimeout(() => document.location.reload(), 100)
    }
}
