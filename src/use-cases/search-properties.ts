import type { Property } from '@/entities/property.js';
import { allProperties } from './create-property.js';

type SearchPropertiesUseCaseResponse = {
  properties: Property[];
};

export class SearchPropertiesUseCase {
  execute(): SearchPropertiesUseCaseResponse {
    const properties = [...allProperties];

    return { properties };
  }
}
