import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;
      const user = this.turnUserAdminUseCase.execute({
        user_id: String(user_id)
      });

      return response.status(200).send();
    } catch (error) {
      return response
        .status(404)
        .json({ error: "Erro ao tornar o usuário admin" });
    }
  }
}

export { TurnUserAdminController };
