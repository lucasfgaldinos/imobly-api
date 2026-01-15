import fastify from 'fastify';
import { StatusCodes } from 'http-status-codes';
import z, { ZodError } from 'zod';
import { AppError } from '@/errors/app-error.js';
import { baseRoutes } from './controllers/base/routes.js';
import { propertiesRoutes } from './controllers/properties/routes.js';
import { visitssRoutes } from './controllers/visits/route.js';

export const app = fastify();

app.register(baseRoutes);
app.register(propertiesRoutes);
app.register(visitssRoutes);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(StatusCodes.BAD_REQUEST)
      .send({ message: 'Validation error!', issues: z.treeifyError(error) });
  }

  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({ message: error.message });
  }

  console.log(error);

  return reply
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send({ message: 'Internal server error!', error });
});
