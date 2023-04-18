import { CreateApartmentController } from './../controllers/apartments/create.controller'
import { Router } from "express";


const apartmentRouter = Router()
const createApartmentController = new CreateApartmentController()

apartmentRouter.post('/apartment', createApartmentController.handle)

export { apartmentRouter }