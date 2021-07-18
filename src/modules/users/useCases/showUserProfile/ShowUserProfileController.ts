import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      const user = this.showUserProfileUseCase.execute();
      return response.json(user);
    } catch (error) {
      return response
        .status(404)
        .json({ error: "Erro ao encontrar o usuário" });
    }
  }
}

export { ShowUserProfileController };
