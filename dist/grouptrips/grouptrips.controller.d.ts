import { GrouptripsService } from './grouptrips.service';
import { CreateGrouptripDto } from './dto/create-grouptrip.dto';
import { UpdateGrouptripDto } from './dto/update-grouptrip.dto';
export declare class GrouptripsController {
    private readonly grouptripsService;
    constructor(grouptripsService: GrouptripsService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__GroupTripClient<{
        id: number;
        title: string;
        destination: string;
        startDate: Date;
        endDate: Date;
        maxCapacity: number;
        program: import("@prisma/client/runtime/library").JsonValue[];
        pricePerPerson: import("@prisma/client/runtime/library").Decimal;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateGrouptripDto: UpdateGrouptripDto): import(".prisma/client").Prisma.Prisma__GroupTripClient<{
        id: number;
        title: string;
        destination: string;
        startDate: Date;
        endDate: Date;
        maxCapacity: number;
        program: import("@prisma/client/runtime/library").JsonValue[];
        pricePerPerson: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__GroupTripClient<{
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
