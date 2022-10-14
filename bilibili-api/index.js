// api 后端服务的单点入口文件 src/main.tsx

const Koa = require('koa'); // 提供 http server

const app = new Koa();

// const crossDomain = require('./middleware/cross-domain') // 自封装支持跨域

// app.use(crossDomain)

const cors = require('koa-cors'); // 提供跨域

const { fetchSuggest, fetchHotword, fetchSearchData,fetchTest } = require('./api')

app.use(cors())

// 1. Koa 路由中间件 引入
const router = require('koa-router')();
// 2. videos get [{...}] 
router.get('/getvideos', ctx => {
    const videos = [
        {
            id: 1,
            name: "小约翰可汗是什么耗子？",
            pic: "http://i1.hdslb.com/bfs/archive/e281360e6d36e645dbc1146cb9e7027fbf80f917.jpg",
        },
        {
            id: 2,
            name: "小约翰可汗是什么耗子？",
            pic: "http://i1.hdslb.com/bfs/archive/e281360e6d36e645dbc1146cb9e7027fbf80f917.jpg",
        },
        {
            id: 3,
            name: "小约翰可汗是什么耗子？",
            pic: "http://i1.hdslb.com/bfs/archive/e281360e6d36e645dbc1146cb9e7027fbf80f917.jpg",
        },
    ]
    ctx.body = videos;
})
router.get('/getbanners', async (ctx, next) => {
    const banners = [
        {
            id: 3,
            name: "小约翰可汗是什么耗子？",
            pic: "http://i1.hdslb.com/bfs/archive/e281360e6d36e645dbc1146cb9e7027fbf80f917.jpg",
        },
    ]
    const data = await fetchTest();
    ctx.body = data;
})
router.get("/search/suggest", async (ctx, next) => {
    const keyword = encodeURI(ctx.query.keyword); // encodeURI 编码
    // http://localhost:3300/search/suggest?w=爱你（%E7%88%B1%E4%BD%A0）
    console.log(keyword, '------------')
    // ctx.body = w;
    try {
        const data = await fetchSuggest(keyword);
        // console.log(data);
        // 返回 JSON 数据
        // ctx.body = data;

        let resData = {
            code: "1", // 状态码 200 成功
            msg: "success"
        }
        if (data.code === 0) {
            resData.data = data.result;
        } else {
            resData.code = "0";
            resData.msg = "fail";
        }
        // // ctx.set('content-type', 'json');
        ctx.body = resData
    } catch (e) {
        next(e)
    }
})
router.get("/search/hotword", async (ctx, next) => {
    try {
        const data = await fetchHotword(); // rpc 调用
        let resData = {
            code: "1", // 成功响应 200
            msg: "success" // 成功 | 失败原因
        }
        if (data.code === 0) {
            resData.data = data.list;
        } else {
            resData.code = "0";
            resData.msg = "fail";
        }
        // ctx.set('content-type', 'json');
        ctx.body = resData
    } catch (e) {
        next(e)
    }
})
router.get("/search", async (ctx, next) => {
    const w = encodeURI(ctx.query.w); // encodeURI 编码
    try {
        const data = await fetchSearchData(w);
        let resData = {
            code: "1", // 状态码 200 成功
            msg: "success"
        }
        if (data.code === 0) {
            resData.data = data.data;
        } else {
            resData.code = "0";
            resData.msg = "fail";
        }
        ctx.body = resData
    } catch (e) {
        next(e)
    }
})
// 挂载 路由中间件
app.use(router.routes())

// 中间件函数
app.use((ctx) => {
    // ctx 请求上下文环境 = req 用户请求 + （中间件） + res 响应结果
    // ctx.body 响应体
    ctx.body = 'hello world'
})

app.listen(3300);