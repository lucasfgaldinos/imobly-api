type PropertyProps = {
  id?: string;
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
  createdAt?: Date;
  updatedAt?: Date;
};

export class Property {
  public id?: string;
  public name: string;
  public totalValue: number;
  public size: number;
  public rentValue: number;
  public condoValue: number;
  public taxValue: number;
  public numberOfBathrooms: number;
  public numberOfRooms: number;
  public garageSlots: number;
  public arePetsAllowed: boolean;
  public isNextToSubway: boolean;
  public isActive: boolean;
  public description: string;
  public isRent: boolean;
  public isSale: boolean;
  public address: string;
  public latitude: number;
  public longitude: number;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(props: PropertyProps) {
    this.id = props.id;
    this.name = props.name;
    this.totalValue = props.totalValue;
    this.size = props.size;
    this.rentValue = props.rentValue;
    this.condoValue = props.condoValue;
    this.taxValue = props.taxValue;
    this.numberOfBathrooms = props.numberOfBathrooms;
    this.numberOfRooms = props.numberOfRooms;
    this.garageSlots = props.garageSlots;
    this.arePetsAllowed = props.arePetsAllowed;
    this.isNextToSubway = props.isNextToSubway;
    this.isActive = props.isActive;
    this.description = props.description;
    this.isRent = props.isRent;
    this.isSale = props.isSale;
    this.address = props.address;
    this.latitude = props.latitude;
    this.longitude = props.longitude;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
