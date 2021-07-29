export default () => ({
  host: process.env.APP_HOST,
  port: parseInt(process.env.APP_PORT),
  db: {
    // type: 'postgres', // not uses
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});
