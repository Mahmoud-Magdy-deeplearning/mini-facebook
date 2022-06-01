import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        token: string;
    }>;
    signUp(user: UserDto): Promise<void>;
}
