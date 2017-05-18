// index:

module.exports = {
    'GET /': async (ctx, next) => {
        //定义变量存放koa推荐的命名空间，用于通过middleware传递信息和前端视图
        let user = ctx.state.user;
        if (user) {
            //使用user变量哈希渲染room.html文件
            ctx.render('room.html', {
                user: user
            });
        } else {
            ctx.response.redirect('/signin');
        }
    }
};
