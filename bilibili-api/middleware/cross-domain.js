module.exports = async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*'); // 请求源设置 */限定域名
    ctx.set('Access-Control-Allow-Headers', 'Content-Type'); // 头部信息允许设置的 内容类型
    ctx.set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS'); // 限制返回的请求响应方法
    await next()
}