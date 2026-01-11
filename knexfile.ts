import path from 'node:path';
import type { Knex } from 'knex';

// import { envs } from './src/config/envs.js'; -> Deu erro ao tentar encontrar o módulo, por isso a string de conexão aqui é usada diretamente

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
