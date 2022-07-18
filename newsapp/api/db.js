
const {Pool} = require('pg')
const config = {
      host: 'localhost',
      user: 'postgres',
      password: 'admin',
      database: 'newsApp',
      port: 5432
  };
const pool = new Pool(config);
module.exports = pool;