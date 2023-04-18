import { ReservationRepository } from './../../repositories/in-memory/reversation.repository';
import { CreateReservationDTO } from './dtos/create.dtos';


export class CreateReservationUseCase {
  async execute(data: CreateReservationDTO) {
    if(!data.name || !data.date_checkin || !data.date_checkout) {
      throw new Error('Name/Date is required!')
    }

    const reservationRepository = new ReservationRepository()
    const reservartiontCreated = await reservationRepository.save(data)

    return reservartiontCreated
  }
}