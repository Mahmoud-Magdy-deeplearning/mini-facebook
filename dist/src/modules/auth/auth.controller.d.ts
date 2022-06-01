import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(user: UserDto, req: any): Promise<{
        token: string;
    }>;
    signUp(user: UserDto, res: Response): Promise<any>;
}
