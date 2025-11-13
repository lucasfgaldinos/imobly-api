import type { FastifyReply, FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';
import { AppInfoUseCase } from '@/use-cases/app-info.js';

export function info(_: FastifyRequest, reply: FastifyReply) {
  const response = new AppInfoUseCase().execute();

  return reply.status(StatusCodes.OK).send(response);
}
