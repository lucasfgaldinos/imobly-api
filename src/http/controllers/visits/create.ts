import type { FastifyReply, FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';
import z from 'zod';
import { VisitsRepository } from '@/database/repositories/visits.js';
import { VisitStatus } from '@/enums/visit-status.js';
import { CreateVisitUseCase } from '@/use-cases/create-visit.js';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const schema = z.object({
    name: z.string().min(1).max(255),
    phone: z.string().length(14),
    email: z.email(),
    date: z.coerce.date(),
    status: z.enum(VisitStatus),
    propertyId: z.uuid(),
  });

  const data = schema.parse(request.body);

  const repository = new VisitsRepository();
  const response = await new CreateVisitUseCase(repository).execute(data);

  return reply.status(StatusCodes.CREATED).send(response);
}
