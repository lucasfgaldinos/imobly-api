import type { Property } from '@/entities/property.js';

type SearchPropertiesUseCaseResponse = {
  properties: Property[];
};

export class SearchPropertiesUseCase {
  execute(): SearchPropertiesUseCaseResponse {
    const properties = [] as Property[];

    return { properties };
  }
}
