import type { Visit } from '@/entities/visit.js';
import { knex } from '../index.js';
import { VisitSchema } from '../schemas/vitis.js';

export class VisitsRepository {
  async create(data: Visit): Promise<Visit> {
    const [createdVisit] = await knex<VisitSchema>('visits')
      .insert({
        name: data.name,
        phone: data.phone,
        email: data.email,
        date: data.date.toISOString(),
        status: data.status,
        property_id: data.propertyId,
      })
      .returning('*');

    const visitEntity = new VisitSchema(createdVisit as VisitSchema).toEntity();

    return visitEntity;
  }
}
