import fastify from 'fastify';
import { baseRoutes } from './controllers/base/routes.js';

export const app = fastify();

app.register(baseRoutes);
