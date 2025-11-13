import type { FastifyInstance } from 'fastify';
import { create } from './create.js';
import { search } from './search.js';

export function propertiesRoutes(app: FastifyInstance) {
  app.post('/api/properties', create);
  app.get('/api/properties', search);
}
