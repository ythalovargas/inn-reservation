import { Request, Response } from 'express';
import { CreateReservationUseCase } from './../../useCase/apartments/create.usecase.reservation';


export class CreateReservationController {

  async handle(request: Request, response: Response) {
    const data = request.body

    const useCase = new CreateReservationUseCase()
    const result = await useCase.execute(data)

    return response.json(result)
  }
}