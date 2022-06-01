import { User } from './model/user.entity';
import { UserDto } from './model/dto/user.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: typeof User);
    create(user: UserDto): Promise<User>;
    findOneByName(name: string): Promise<User>;
    findOneById(id: number): Promise<User>;
}
