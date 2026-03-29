import { CreateItineraryDto } from './dto/create-itinerary.dto';
import { UpdateItineraryDto } from './dto/update-itinerary.dto';
import { PrismaService } from 'src/prisma.service';
export declare class ItinerariesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createItineraryDto: CreateItineraryDto): import(".prisma/client").Prisma.Prisma__ItineraryClient<{
        id: number;
        days: import("@prisma/client/runtime/library").JsonValue[];
        userId: number;
        status: import(".prisma/client").$Enums.ItineraryStatus;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
        title: string;
        intakeForm: import("@prisma/client/runtime/library").JsonValue[];
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        days: import("@prisma/client/runtime/library").JsonValue[];
        userId: number;
        status: import(".prisma/client").$Enums.ItineraryStatus;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
        title: string;
        intakeForm: import("@prisma/client/runtime/library").JsonValue[];
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ItineraryClient<{
        id: number;
        days: import("@prisma/client/runtime/library").JsonValue[];
        userId: number;
        status: import(".prisma/client").$Enums.ItineraryStatus;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
        title: string;
        intakeForm: import("@prisma/client/runtime/library").JsonValue[];
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateItineraryDto: UpdateItineraryDto): import(".prisma/client").Prisma.Prisma__ItineraryClient<{
        id: number;
        days: import("@prisma/client/runtime/library").JsonValue[];
        userId: number;
        status: import(".prisma/client").$Enums.ItineraryStatus;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
        title: string;
        intakeForm: import("@prisma/client/runtime/library").JsonValue[];
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ItineraryClient<{
        id: number;
        days: import("@prisma/client/runtime/library").JsonValue[];
        userId: number;
        status: import(".prisma/client").$Enums.ItineraryStatus;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
        title: string;
        intakeForm: import("@prisma/client/runtime/library").JsonValue[];
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
