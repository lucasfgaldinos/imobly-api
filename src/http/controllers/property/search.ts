import type { FastifyReply, FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';
import { SearchPropertiesUseCase } from '@/use-cases/search-properties.js';

export function search(_: FastifyRequest, reply: FastifyReply) {
  const response = new SearchPropertiesUseCase().execute();

  return reply.status(StatusCodes.OK).send(response);
}
