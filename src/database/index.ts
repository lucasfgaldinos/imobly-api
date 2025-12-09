import knexConfig from 'knex';

export const knex = knexConfig({
  client: 'pg',
  connection: 'postgres://imobly:imobly@localhost:5432/imobly',
  pool: {
    min: 2,
    max: 10,
  },
});
