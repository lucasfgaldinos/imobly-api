import type { PropertiesRepository } from '@/database/repositories/properties.js';
import { Property } from '@/entities/property.js';

export type CreatePropertyUseCaseRequest = {
  name: string;
  totalValue: number;
  size: number;
  rentValue: number;
  condoValue: number;
  taxValue: number;
  numberOfBathrooms: number;
  numberOfRooms: number;
  garageSlots: number;
  arePetsAllowed: boolean;
  isNextToSubway: boolean;
  isActive: boolean;
  description: string;
  isRent: boolean;
  isSale: boolean;
  address: string;
  latitude: number;
  longitude: number;
  isFurnished: boolean;
};

type CreatePropertyUseCaseResponse = {
  property: Property;
};

export class CreatePropertyUseCase {
  constructor(private repository: PropertiesRepository) {}

  async execute(
    data: CreatePropertyUseCaseRequest,
  ): Promise<CreatePropertyUseCaseResponse> {
    const property = new Property(data);

    const createdProperty = await this.repository.create(property);

    return { property: createdProperty };
  }
}
