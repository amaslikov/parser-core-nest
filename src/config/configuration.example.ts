export const config = {
  db: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123',
    database: 'parser_nestjs_db',
  },
};

export default () => config;

// CRUD
// nest g resource [name]
// Controller
// nest g controller cats
// Service
// nest g service cats
// Module
// nest g module cats
// Migrations
// ts-node --transpile-only ./node_modules/typeorm/cli.js [migration:run]
// yup as joi
// typeorm https://github.com/ambroiseRabier/typeorm-nestjs-migration-example
// ts decorator https://codeburst.io/decorate-your-code-with-typescript-decorators-5be4a4ffecb4
// api https://wanago.io/2020/05/11/nestjs-api-controllers-routing-module/

/* Helpful information
0. Controller. passthrough: true - is for compatibility for interceptors,
  httpCode decorators.
1. Provider scope can be:
  default - singleton,
  request - for each request own instance,
  transient - for each inject.
2. Module is used for encapsulate controllers and providers
  into one common thing.
3. Middleware set up in module
  or for global scope used method application instance app.use(middleware).
4. Exception-filters set up for controller, route, app and provider.
  If set up as an provider then that filter is, in fact, global.
5. Pipes may be only for route: parameters, method or global.
  For validation and transform.
6. Guards execute after middleware but before any interceptor or pipe.
7. Validation - class-validator, set decorators for dto.
  For main.js globally set:
    whitelist: true,
    transform: true,
9. Authorization:
  APP_GUARD JwtAuthGuard
  route login make public and invoke authService.login
 */
