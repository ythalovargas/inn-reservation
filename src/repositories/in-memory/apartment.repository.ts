import { randomUUID } from 'crypto';
import { CreateApartmentDTO } from './../../useCase/apartments/dtos/create.dtos';
import { IApartment } from '../../entities/apartment.entity';


export class ApartmentRepository {

  apartments: IApartment[] = []

  async findByApartment(number: number) {
    console.log("Apartamento: ", this.apartments)
    return this.apartments.find((apartment) => apartment.number === number)
  }

  async save(data: CreateApartmentDTO) {
    const result: IApartment = {
      id: randomUUID(),
      ...data
  }
    
    this.apartments.push(result)
    return result
  }
}