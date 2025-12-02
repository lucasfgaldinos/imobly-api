import type { FastifyReply, FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';
import {
  CreatePropertyUseCase,
  type CreatePropertyUseCaseRequest,
} from '@/use-cases/create-property.js';

export function create(request: FastifyRequest, reply: FastifyReply) {
  // TODO Validar os dados que vêm do body para criar a Property
  const response = new CreatePropertyUseCase().execute(
    request.body as CreatePropertyUseCaseRequest,
  );

  return reply.status(StatusCodes.CREATED).send(response);
}
