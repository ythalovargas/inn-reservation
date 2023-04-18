import { CreateReservationController } from './../controllers/reservations/reservation.controller';
import { Router } from "express"


const reservationRouter = Router()
const createReservationController = new CreateReservationController()

reservationRouter.post('/reservation', createReservationController.handle)

export { reservationRouter }