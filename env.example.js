module.exports = () => ({
  host: 'localhost',
  port: 3000,
  db: {
    // type: 'postgres', // not uses, instead should set up in ormconfig.ts
    host: 'localhost',
    port: 5432,
    username: 'user_db',
    password: 'pass_db',
    database: 'name_db',
  },
});
