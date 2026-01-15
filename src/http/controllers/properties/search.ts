import type { FastifyReply, FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';
import { PropertiesRepository } from '@/database/repositories/properties.js';
import { SearchPropertiesUseCase } from '@/use-cases/search-properties.js';

export async function search(_: FastifyRequest, reply: FastifyReply) {
  const repository = new PropertiesRepository();
  const response = await new SearchPropertiesUseCase(repository).execute();

  return reply.status(StatusCodes.OK).send(response);
}
