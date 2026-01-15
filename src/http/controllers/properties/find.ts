import type { FastifyReply, FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';
import z from 'zod';
import { PropertiesRepository } from '@/database/repositories/properties.js';
import { FindPropertyUseCase } from '@/use-cases/find-property.js';

export async function find(request: FastifyRequest, reply: FastifyReply) {
  const schema = z.object({
    id: z.uuid(),
  });

  const params = schema.parse(request.params);

  const repository = new PropertiesRepository();
  const response = await new FindPropertyUseCase(repository).execute(params.id);

  return reply.status(StatusCodes.OK).send(response);
}
