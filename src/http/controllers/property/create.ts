import type { FastifyReply, FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';
import z from 'zod';
import { PropertiesRepository } from '@/database/repositories/properties.js';
import { CreatePropertyUseCase } from '@/use-cases/create-property.js';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const schema = z.object({
    name: z.string().min(1).max(255),
    totalValue: z.number().int(),
    size: z.number(),
    rentValue: z.number().int(),
    condoValue: z.number().int(),
    taxValue: z.number().int(),
    numberOfBathrooms: z.number().int(),
    numberOfRooms: z.number().int(),
    garageSlots: z.number().int(),
    arePetsAllowed: z.boolean(),
    isNextToSubway: z.boolean(),
    isActive: z.boolean(),
    description: z.string().max(1000),
    isRent: z.boolean(),
    isSale: z.boolean(),
    address: z.string().max(1000),
    latitude: z.number(),
    longitude: z.number(),
    isFurnished: z.boolean()
  });

  const data = schema.parse(request.body);

  const repository = new PropertiesRepository();
  const response = await new CreatePropertyUseCase(repository).execute(data);

  return reply.status(StatusCodes.CREATED).send(response);
}
