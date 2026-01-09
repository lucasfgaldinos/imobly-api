import { StatusCodes } from 'http-status-codes';
import type { PropertiesRepository } from '@/database/repositories/properties.js';
import type { Property } from '@/entities/property.js';
import { AppError } from '@/errors/app-error.js';

type FindPropertyUseCaseResponse = Property;

export class FindPropertyUseCase {
  constructor(private repository: PropertiesRepository) {}

  async execute(id: string): Promise<FindPropertyUseCaseResponse> {
    const property = await this.repository.findById(id);

    if (!property) {
      throw new AppError('Property not found.', StatusCodes.NOT_FOUND);
    }

    return property;
  }
}
