

export type CreateApartmentDTO = {
  number: number
  capacity: number
  observation: string
}

export type CreateReservationDTO = {
  name: string
  apartmentId: string
  date_checkin: Date
  date_checkout: Date
}