import fastify from 'fastify';
import { baseRoutes } from './controllers/base/routes.js';
import { propertiesRoutes } from './controllers/property/routes.js';

export const app = fastify();

app.register(baseRoutes);
app.register(propertiesRoutes);

// TODO Criar um handler global de erros
// TODO Criar conexão com o Banco de Dados
