import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(createUserDto: CreateUserDto): Promise<{
        email: string;
        name: string | null;
        id: number;
    }>;
    login(email: string, password: string): Promise<{
        user: {
            email: string;
            name: string | null;
            id: number;
        };
        access_token: string;
    } | null>;
    findAll(): Promise<{
        email: string;
        password: string;
        name: string | null;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        email: string;
        name: string | null;
        id: number;
    } | null>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        email: string;
        name: string | null;
        id: number;
    }>;
    remove(id: number): Promise<{
        email: string;
        password: string;
        name: string | null;
        id: number;
    }>;
}
