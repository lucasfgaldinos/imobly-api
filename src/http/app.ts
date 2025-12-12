import fastify from 'fastify';
import { StatusCodes } from 'http-status-codes';
import z, { ZodError } from 'zod';
import { baseRoutes } from './controllers/base/routes.js';
import { propertiesRoutes } from './controllers/property/routes.js';

export const app = fastify();

app.register(baseRoutes);
app.register(propertiesRoutes);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: 'Validation error!', issues: z.treeifyError(error) });
  }

  app.log.error(error);

  return reply
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send({ message: 'Internal server error!' });
});
