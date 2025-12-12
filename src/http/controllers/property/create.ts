import type { FastifyReply, FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';
import z from 'zod';
import { PropertiesRepository } from '@/database/repositories/properties.js';
import { CreatePropertyUseCase } from '@/use-cases/create-property.js';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const schema = z.object({
    name: z.string().min(1).max(255),
    totalValue: z.number().int(),
    numberOfRooms: z.number().int(),
    city: z.string().min(1).max(255),
    state: z.string().length(2),
    size: z.number(),
  });

  const data = schema.parse(request.body);

  const repository = new PropertiesRepository();
  const response = await new CreatePropertyUseCase(repository).execute(data);

  return reply.status(StatusCodes.CREATED).send(response);
}
