import path from 'node:path';
import type { Knex } from 'knex';

const config: Knex.Config = {
  client: 'postgresql',
  connection: 'postgres://imobly:imobly@localhost:5432/imobly',
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
