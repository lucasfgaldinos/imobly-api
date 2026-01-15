import type { FastifyInstance } from 'fastify';
import { create } from './create.js';
import { createVisit } from './create-visit.js';
import { find } from './find.js';
import { search } from './search.js';
import { update } from './update.js';

export function propertiesRoutes(app: FastifyInstance) {
  app.post('/api/manager/properties', create);
  app.get('/api/manager/properties/:id', find);
  app.get('/api/manager/properties', search);
  app.patch('/api/manager/properties/:id', update);
  app.post('/api/manager/properties/:id/visit', createVisit);
}
