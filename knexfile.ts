import path from 'node:path';
import type { Knex } from 'knex';

const config: Knex.Config = {
  client: 'postgresql',
  connection: {
    database: 'imobly',
    user: 'imobly',
    password: 'imobly',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: path.join('src', 'database', 'migrations'),
  },
};

export default config;
