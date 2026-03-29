import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    login(res: any, body: any): Promise<any>;
    register(createUserDto: CreateUserDto): Promise<{
        email: string;
        name: string | null;
        id: number;
    }>;
    findAll(): Promise<{
        email: string;
        password: string;
        name: string | null;
        id: number;
    }[]>;
    findOne(id: string): Promise<{
        email: string;
        name: string | null;
        id: number;
    } | null>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        email: string;
        name: string | null;
        id: number;
    }>;
    remove(id: string): Promise<{
        email: string;
        password: string;
        name: string | null;
        id: number;
    }>;
}
