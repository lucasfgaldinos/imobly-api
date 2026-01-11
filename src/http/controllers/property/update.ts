import type { FastifyReply, FastifyRequest } from 'fastify';
import { StatusCodes } from 'http-status-codes';
import z from 'zod';
import { PropertiesRepository } from '@/database/repositories/properties.js';
import { UpdatePropertyUseCase } from '@/use-cases/update-property.js';

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const schema = z.object({
    name: z.string().min(1).max(255).optional(),
    totalValue: z.number().int().optional(),
    size: z.number().optional(),
    rentValue: z.number().int().optional(),
    condoValue: z.number().int().optional(),
    taxValue: z.number().int().optional(),
    numberOfBathrooms: z.number().int().optional(),
    numberOfRooms: z.number().int().optional(),
    garageSlots: z.number().int().optional(),
    arePetsAllowed: z.boolean().optional(),
    isNextToSubway: z.boolean().optional(),
    isActive: z.boolean().optional(),
    description: z.string().max(1000).optional(),
    isRent: z.boolean().optional(),
    isSale: z.boolean().optional(),
    address: z.string().max(1000).optional(),
    latitude: z.number().optional(),
    longitude: z.number().optional(),
    isFurnished: z.boolean().optional(),
  });

  const paramsSchema = z.object({
    id: z.uuid(),
  });

  const data = schema.parse(request.body);
  const params = paramsSchema.parse(request.params);

  const repository = new PropertiesRepository();
  const response = await new UpdatePropertyUseCase(repository).execute(
    params.id,
    data,
  );

  return reply.status(StatusCodes.OK).send(response);
}
