import { Request, Response } from 'express'
import { CreateApartmentUseCase } from '../../useCase/apartments/create.usecase';


export class CreateApartmentController {
  
  async handle(request: Request, response: Response) {
    const data = request.body

    const useCase = new CreateApartmentUseCase()
    const result = await useCase.execute(data)

    return response.json(result)
  }
}