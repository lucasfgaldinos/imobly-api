import { Property } from '@/entities/property.js';

type PropertySchemaProps = {
  id?: string;
  name: string;
  total_value: number;
  number_of_rooms: number;
  city: string;
  state: string;
  size: number;
  created_at?: string;
  updated_at?: string;
};

export class PropertySchema {
  public id?: string;
  public name: string;
  public total_value: number;
  public number_of_rooms: number;
  public city: string;
  public state: string;
  public size: number;
  public created_at?: string;
  public updated_at?: string;

  constructor({
    id,
    name,
    total_value,
    number_of_rooms,
    city,
    state,
    size,
    created_at,
    updated_at,
  }: PropertySchemaProps) {
    this.id = id;
    this.name = name;
    this.total_value = total_value;
    this.number_of_rooms = number_of_rooms;
    this.city = city;
    this.state = state;
    this.size = size;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

  public toEntity() {
    const {
      id,
      name,
      total_value,
      number_of_rooms,
      city,
      state,
      size,
      created_at,
      updated_at,
    } = this;

    return new Property({
      id,
      name,
      totalValue: total_value,
      numberOfRooms: number_of_rooms,
      city,
      state,
      size,
      createdAt: created_at ? new Date(created_at) : undefined,
      updatedAt: updated_at ? new Date(updated_at) : undefined,
    });
  }
}
