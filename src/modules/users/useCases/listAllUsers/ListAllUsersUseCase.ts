import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userExists = this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new Error("User does not exists");
    }
    if (!userExists.admin) {
      throw new Error("User does not have permission");
    }

    const users = this.usersRepository.list();

    console.log("AQUIIIIIIII");
    console.log(users);

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
