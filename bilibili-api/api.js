// node 版本 比 es6 晚
const fetch = require("node-fetch"); // 在后端发送一个请求 rpc调用
// 搜索推荐
const URL_SUGGEST = "https://s.search.bilibili.com/main/suggest";

const URL_HOTWORD = "https://s.search.bilibili.com/main/hotword";

const URL_SEARCH = "https://api.bilibili.com/x/web-interface/search/all/v2";

const TEST = "https://www.taptap.com/webapiv2/gate/v3/rec1?X-UA=V%3D1%26PN%3DWebApp%26LANG%3Dzh_CN%26VN_CODE%3D82%26VN%3D0.1.0%26LOC%3DCN%26PLT%3DiOS%26DS%3DiOS%26UID%3D934c931d-e81a-43c8-9faa-fe1a6b84f9ab"


const fetchTest = () => {
    return fetch(TEST)
        .then(res => res.json())
        .then(json => json)
        .then(data=>console.log(data))
}


const fetchSuggest = (keyword) => {
    const params = [
        "func=suggest",
        "suggest_type=accurate",
        "sub_type=tag",
        "main_ver=v1",
        "bangumi_acc_num=3",
        "tag_num=10",
        "highlight=",
        `term=${keyword}`
    ];
    console.log(URL_SUGGEST + "?" + params.join("&"))
    return fetch(URL_SUGGEST + "?" + params.join("&"))
        .then(res => res.json())
        .then(json => json)
}

const fetchHotword = () => {
    // console.log(URL_HOTWORD)
    return fetch(URL_HOTWORD)
        .then(res => res.json())
        .then(json => json)
}

const fetchSearchData = (keyword) => {
    const params = [
        "page=1",
        "pagesize=20",
        `keyword=${keyword}`
    ];
    return fetch(URL_SEARCH + "?" + params.join("&"))
        .then(res => res.json())
        .then(json => json)
}
module.exports = {
    fetchSuggest,
    fetchHotword,
    fetchSearchData,
    fetchTest
}