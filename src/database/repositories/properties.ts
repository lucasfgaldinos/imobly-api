import type { Property } from '@/entities/property.js';
import { knex } from '../index.js';
import { PropertySchema } from '../schemas/property.js';

export class PropertiesRepository {
  async create(data: Property): Promise<Property> {
    const [createdProperty] = await knex<PropertySchema>('properties')
      .insert({
        name: data.name,
        total_value: data.totalValue,
        size: data.size,
        rent_value: data.rentValue,
        condo_value: data.condoValue,
        tax_value: data.taxValue,
        number_of_bathrooms: data.numberOfBathrooms,
        number_of_rooms: data.numberOfRooms,
        garage_slots: data.garageSlots,
        are_pets_allowed: data.arePetsAllowed,
        is_next_to_subway: data.isNextToSubway,
        is_active: data.isActive,
        description: data.description,
        is_rent: data.isRent,
        is_sale: data.isSale,
        address: data.address,
        latitude: data.latitude,
        longitude: data.longitude,
        is_furnished: data.isFurnished
      })
      .returning('*');

    const propertyEntity = new PropertySchema(
      createdProperty as PropertySchema,
    ).toEntity();

    return propertyEntity;
  }

  async listAll(): Promise<Property[]> {
    const properties = await knex<PropertySchema>('properties');

    const propertiesEntity = properties.map((property) =>
      new PropertySchema(property).toEntity(),
    );

    return propertiesEntity;
  }

  async findById(id: string): Promise<Property | null> {
    const properties = await knex<PropertySchema>('properties').where({id})

    const propertiesEntity = properties.map((property) =>
      new PropertySchema(property).toEntity(),
    );

    const property = propertiesEntity[0]

    if(!property) {
      return null
    }

    return property
  }
}
