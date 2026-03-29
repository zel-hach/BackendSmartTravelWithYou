import { ItinerariesService } from './itineraries.service';
import { CreateItineraryDto } from './dto/create-itinerary.dto';
import { UpdateItineraryDto } from './dto/update-itinerary.dto';
export declare class ItinerariesController {
    private readonly itinerariesService;
    constructor(itinerariesService: ItinerariesService);
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ItineraryClient<{
        id: number;
        days: import("@prisma/client/runtime/library").JsonValue[];
        userId: number;
        status: import(".prisma/client").$Enums.ItineraryStatus;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
        title: string;
        intakeForm: import("@prisma/client/runtime/library").JsonValue[];
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateItineraryDto: UpdateItineraryDto): import(".prisma/client").Prisma.Prisma__ItineraryClient<{
        id: number;
        days: import("@prisma/client/runtime/library").JsonValue[];
        userId: number;
        status: import(".prisma/client").$Enums.ItineraryStatus;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
        title: string;
        intakeForm: import("@prisma/client/runtime/library").JsonValue[];
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ItineraryClient<{
        id: number;
        days: import("@prisma/client/runtime/library").JsonValue[];
        userId: number;
        status: import(".prisma/client").$Enums.ItineraryStatus;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
        title: string;
        intakeForm: import("@prisma/client/runtime/library").JsonValue[];
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
