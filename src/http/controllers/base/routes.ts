import type { FastifyInstance } from 'fastify';
import { info } from './info.js';

export function baseRoutes(app: FastifyInstance) {
  app.get('/api', info);
}
