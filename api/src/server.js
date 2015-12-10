var koa = require('koa');
var app = koa();

app.use(function *() {
    this.body = 'Hello';
});

app.listen(3000);
