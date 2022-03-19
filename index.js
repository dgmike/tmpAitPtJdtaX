import Koa from 'koa';
import Routes from 'koa-routes';

const routes = new Routes();

routes.get('/', (ctx) => {
  ctx.body = {
    ok: true,
  };
})

const app = new Koa();
app.use(routes.allowedMethods())
  .use(routes.routes());

export default { app };
