import type { FastifyReply, FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';
import { PropertiesRepository } from '@/database/repositories/properties.js';
import {
  CreatePropertyUseCase,
  type CreatePropertyUseCaseRequest,
} from '@/use-cases/create-property.js';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  // TODO Validar os dados que vêm do body para criar a Property
  const repository = new PropertiesRepository();
  const response = await new CreatePropertyUseCase(repository).execute(
    request.body as CreatePropertyUseCaseRequest,
  );

  return reply.status(StatusCodes.CREATED).send(response);
}
