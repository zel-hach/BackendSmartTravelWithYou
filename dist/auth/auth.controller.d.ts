import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(createAuthDto: CreateAuthDto): {
        access_token: string;
        refresh_token: string;
    };
}
