import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    create(createServiceDto: CreateServiceDto): import(".prisma/client").Prisma.Prisma__ServiceClient<{
        name: string;
        id: number;
        description: string;
        label: string;
        pricePublic: number;
        commissionAmount: number;
        unit: string;
        providerId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        provider: {
            name: string;
            id: number;
            city: string;
            category: import(".prisma/client").$Enums.Category;
            photo: string[];
            location: import("@prisma/client/runtime/library").JsonValue;
            isActive: boolean;
        };
    } & {
        name: string;
        id: number;
        description: string;
        label: string;
        pricePublic: number;
        commissionAmount: number;
        unit: string;
        providerId: number;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ServiceClient<{
        name: string;
        id: number;
        description: string;
        label: string;
        pricePublic: number;
        commissionAmount: number;
        unit: string;
        providerId: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateServiceDto: UpdateServiceDto): import(".prisma/client").Prisma.Prisma__ServiceClient<{
        name: string;
        id: number;
        description: string;
        label: string;
        pricePublic: number;
        commissionAmount: number;
        unit: string;
        providerId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ServiceClient<{
        name: string;
        id: number;
        description: string;
        label: string;
        pricePublic: number;
        commissionAmount: number;
        unit: string;
        providerId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
