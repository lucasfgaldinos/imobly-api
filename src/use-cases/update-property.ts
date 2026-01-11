import type { PropertiesRepository } from '@/database/repositories/properties.js';
import type { Property } from '@/entities/property.js';

export type UpdatePropertyUseCaseRequest = {
  name?: string;
  totalValue?: number;
  size?: number;
  rentValue?: number;
  condoValue?: number;
  taxValue?: number;
  numberOfBathrooms?: number;
  numberOfRooms?: number;
  garageSlots?: number;
  arePetsAllowed?: boolean;
  isNextToSubway?: boolean;
  isActive?: boolean;
  description?: string;
  isRent?: boolean;
  isSale?: boolean;
  address?: string;
  latitude?: number;
  longitude?: number;
  isFurnished?: boolean;
};

type UpdatePropertyUseCaseResponse = {
  property: Property;
};

export class UpdatePropertyUseCase {
  constructor(private repository: PropertiesRepository) {}

  async execute(
    id: string,
    data: UpdatePropertyUseCaseRequest,
  ): Promise<UpdatePropertyUseCaseResponse> {
    const updatedProperty = await this.repository.update(id, data);

    return { property: updatedProperty };
  }
}
