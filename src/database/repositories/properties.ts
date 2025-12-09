import type { Property } from '@/entities/property.js';
import { knex } from '../index.js';
import { PropertySchema } from '../schemas/property.js';

export class PropertiesRepository {
  async create(property: Property): Promise<Property> {
    const [createdProperty] = await knex('properties')
      .insert({
        name: property.name,
        total_value: property.totalValue,
        number_of_rooms: property.numberOfRooms,
        city: property.city,
        state: property.state,
        size: property.size,
      })
      .returning('*');

    const propertyEntity = new PropertySchema(createdProperty).toEntity();

    return propertyEntity;
  }

  async listAll(): Promise<Property[]> {
    const properties = await knex<PropertySchema>('properties');

    const propertiesEntity = properties.map((property) =>
      new PropertySchema(property).toEntity(),
    );

    return propertiesEntity;
  }
}
