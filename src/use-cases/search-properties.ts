import type { PropertiesRepository } from '@/database/repositories/properties.js';
import type { Property } from '@/entities/property.js';

type SearchPropertiesUseCaseResponse = {
  properties: Property[];
};

export class SearchPropertiesUseCase {
  constructor(private repository: PropertiesRepository) {}

  async execute(): Promise<SearchPropertiesUseCaseResponse> {
    const properties = await this.repository.listAll();

    return { properties };
  }
}
