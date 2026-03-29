import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { PrismaService } from 'src/prisma.service';
export declare class ProvidersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProviderDto: CreateProviderDto): import(".prisma/client").Prisma.Prisma__ProviderClient<{
        name: string;
        id: number;
        city: string;
        category: import(".prisma/client").$Enums.Category;
        photo: string[];
        location: import("@prisma/client/runtime/library").JsonValue;
        isActive: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        id: number;
        city: string;
        category: import(".prisma/client").$Enums.Category;
        photo: string[];
        location: import("@prisma/client/runtime/library").JsonValue;
        isActive: boolean;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ProviderClient<{
        name: string;
        id: number;
        city: string;
        category: import(".prisma/client").$Enums.Category;
        photo: string[];
        location: import("@prisma/client/runtime/library").JsonValue;
        isActive: boolean;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateProviderDto: UpdateProviderDto): import(".prisma/client").Prisma.Prisma__ProviderClient<{
        name: string;
        id: number;
        city: string;
        category: import(".prisma/client").$Enums.Category;
        photo: string[];
        location: import("@prisma/client/runtime/library").JsonValue;
        isActive: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ProviderClient<{
        name: string;
        id: number;
        city: string;
        category: import(".prisma/client").$Enums.Category;
        photo: string[];
        location: import("@prisma/client/runtime/library").JsonValue;
        isActive: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
