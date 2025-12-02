import type { Property } from '@/entities/property.js';

export type CreatePropertyUseCaseRequest = {
  name: string;
  totalValue: number;
  numberOfRooms: number;
  city: string;
  state: string;
  size: string;
};

type CreatePropertyUseCaseResponse = {
  property: Property;
};

export const allProperties: Property[] = [];
export class CreatePropertyUseCase {
  execute({
    name,
    totalValue,
    numberOfRooms,
    city,
    state,
    size,
  }: CreatePropertyUseCaseRequest): CreatePropertyUseCaseResponse {
    const property = {
      name,
      totalValue,
      numberOfRooms,
      city,
      state,
      size,
    };

    // TODO Salvar a property no Banco de Dados
    allProperties.push(property);

    return { property };
  }
}
