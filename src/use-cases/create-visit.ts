import type { VisitsRepository } from '@/database/repositories/visits.js';
import { Visit } from '@/entities/visit.js';

export type CreateVisitUseCaseRequest = {
  name: string;
  phone: string;
  email: string;
  date: Date;
  status: string;
  propertyId: string;
};

type CreateVisitUseCaseResponse = {
  visit: Visit;
};

export class CreatePropertyUseCase {
  constructor(private repository: VisitsRepository) {}

  async execute(
    data: CreateVisitUseCaseRequest,
  ): Promise<CreateVisitUseCaseResponse> {
    const visit = new Visit(data);

    const createdVisit = await this.repository.create(visit);

    return { visit: createdVisit };
  }
}
