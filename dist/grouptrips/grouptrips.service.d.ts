import { CreateGrouptripDto } from './dto/create-grouptrip.dto';
import { UpdateGrouptripDto } from './dto/update-grouptrip.dto';
import { PrismaService } from 'src/prisma.service';
export declare class GrouptripsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createGrouptripDto: CreateGrouptripDto): import(".prisma/client").Prisma.Prisma__GroupTripClient<{
        id: number;
        title: string;
        destination: string;
        startDate: Date;
        endDate: Date;
        maxCapacity: number;
        program: import("@prisma/client/runtime/library").JsonValue[];
        pricePerPerson: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        destination: string;
        startDate: Date;
        endDate: Date;
        maxCapacity: number;
        program: import("@prisma/client/runtime/library").JsonValue[];
        pricePerPerson: import("@prisma/client/runtime/library").Decimal;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__GroupTripClient<{
        id: number;
        title: string;
        destination: string;
        startDate: Date;
        endDate: Date;
        maxCapacity: number;
        program: import("@prisma/client/runtime/library").JsonValue[];
        pricePerPerson: import("@prisma/client/runtime/library").Decimal;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateGrouptripDto: UpdateGrouptripDto): import(".prisma/client").Prisma.Prisma__GroupTripClient<{
        id: number;
        title: string;
        destination: string;
        startDate: Date;
        endDate: Date;
        maxCapacity: number;
        program: import("@prisma/client/runtime/library").JsonValue[];
        pricePerPerson: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__GroupTripClient<{
        id: number;
        title: string;
        destination: string;
        startDate: Date;
        endDate: Date;
        maxCapacity: number;
        program: import("@prisma/client/runtime/library").JsonValue[];
        pricePerPerson: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
