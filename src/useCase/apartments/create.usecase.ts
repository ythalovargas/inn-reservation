import { ApartmentRepository } from '../../repositories/in-memory/apartment.repository'
import { CreateApartmentDTO } from './dtos/create.dtos';


export class CreateApartmentUseCase {
  async execute(data: CreateApartmentDTO) {
    if(!data.number || !data.capacity) {
      throw new Error('Number/Capacity is required!')
    }

    const apartmentRepository = new ApartmentRepository()
    const apartmentCreated = await apartmentRepository.save(data)
    
    return apartmentCreated
  }
}