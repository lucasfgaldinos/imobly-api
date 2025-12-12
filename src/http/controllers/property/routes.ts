import type { FastifyInstance } from 'fastify';
import { create } from './create.js';
import { search } from './search.js';

export function propertiesRoutes(app: FastifyInstance) {
  app.post('/api/manager/properties', create);
  app.get('/api/manager/properties', search);
}
