import { Injectable, Inject } from '@nestjs/common';
import { User } from '../model/user.entity';
import { UserDto } from '../model/dto/user.dto';
import { USER_REPOSITORY } from '../../../core/constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create(user: UserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async findOneByName(name: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { name } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id } });
  }
}
