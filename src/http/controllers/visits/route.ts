import type { FastifyInstance } from 'fastify';
import { create } from './create.js';

export function visitssRoutes(app: FastifyInstance) {
  app.post('/api/manager/visits', create);
}
