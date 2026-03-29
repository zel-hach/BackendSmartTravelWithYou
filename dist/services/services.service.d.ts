import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/prisma.service';
export declare class ServicesService {
    private prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ServiceClient<{
        name: string;
        id: number;
        description: string;
        label: string;
        pricePublic: number;
        commissionAmount: number;
        unit: string;
        providerId: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateServiceDto: UpdateServiceDto): import(".prisma/client").Prisma.Prisma__ServiceClient<{
        name: string;
        id: number;
        description: string;
        label: string;
        pricePublic: number;
        commissionAmount: number;
        unit: string;
        providerId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ServiceClient<{
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
