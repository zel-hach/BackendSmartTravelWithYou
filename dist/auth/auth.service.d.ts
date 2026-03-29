import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    login(createAuthDto: CreateAuthDto): {
        access_token: string;
        refresh_token: string;
    };
    generateTokens(user: any): {
        access_token: string;
        refresh_token: string;
    };
}
