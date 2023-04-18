import { randomUUID } from 'crypto';
import { CreateReservationDTO } from './../../useCase/apartments/dtos/create.dtos';
import { IReservation } from './../../entities/reservartion.entity';


export class ReservationRepository {
  reservations: IReservation[] = []

  async save(data: CreateReservationDTO) {
    const result: IReservation = {
      id: randomUUID(),
      ...data
    }

    this.reservations.push(result)
    return result
  }
}