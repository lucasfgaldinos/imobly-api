import type { FastifyInstance } from 'fastify';
import { create } from './create.js';

export function propertiesRoutes(app: FastifyInstance) {
  app.post('/api/properties', create);
}
