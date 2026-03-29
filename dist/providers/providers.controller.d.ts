import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
export declare class ProvidersController {
    private readonly providersService;
    constructor(providersService: ProvidersService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProviderClient<{
        name: string;
        id: number;
        city: string;
        category: import(".prisma/client").$Enums.Category;
        photo: string[];
        location: import("@prisma/client/runtime/library").JsonValue;
        isActive: boolean;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateProviderDto: UpdateProviderDto): import(".prisma/client").Prisma.Prisma__ProviderClient<{
        name: string;
        id: number;
        city: string;
        category: import(".prisma/client").$Enums.Category;
        photo: string[];
        location: import("@prisma/client/runtime/library").JsonValue;
        isActive: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProviderClient<{
        name: string;
        id: number;
        city: string;
        category: import(".prisma/client").$Enums.Category;
        photo: string[];
        location: import("@prisma/client/runtime/library").JsonValue;
        isActive: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
