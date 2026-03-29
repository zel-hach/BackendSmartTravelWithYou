import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { PrismaService } from '../prisma.service';
export declare class BookingsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createBookingDto: CreateBookingDto): import(".prisma/client").Prisma.Prisma__BookingClient<{
        service: {
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
        };
    } & {
        id: number;
        userId: number;
        serviceId: number;
        status: import(".prisma/client").$Enums.BookingStatus;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
        commissionTotal: import("@prisma/client/runtime/library").Decimal;
        paymentIntent: string;
        bookingDate: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        service: {
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
        };
        user: {
            email: string;
            password: string;
            name: string | null;
            id: number;
        };
    } & {
        id: number;
        userId: number;
        serviceId: number;
        status: import(".prisma/client").$Enums.BookingStatus;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
        commissionTotal: import("@prisma/client/runtime/library").Decimal;
        paymentIntent: string;
        bookingDate: Date;
    })[]>;
    findByUser(userId: number): import(".prisma/client").Prisma.PrismaPromise<({
        service: {
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
        };
    } & {
        id: number;
        userId: number;
        serviceId: number;
        status: import(".prisma/client").$Enums.BookingStatus;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
        commissionTotal: import("@prisma/client/runtime/library").Decimal;
        paymentIntent: string;
        bookingDate: Date;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__BookingClient<({
        service: {
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
        };
        user: {
            email: string;
            password: string;
            name: string | null;
            id: number;
        };
    } & {
        id: number;
        userId: number;
        serviceId: number;
        status: import(".prisma/client").$Enums.BookingStatus;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
        commissionTotal: import("@prisma/client/runtime/library").Decimal;
        paymentIntent: string;
        bookingDate: Date;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateBookingDto: UpdateBookingDto): import(".prisma/client").Prisma.Prisma__BookingClient<{
        service: {
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
        };
    } & {
        id: number;
        userId: number;
        serviceId: number;
        status: import(".prisma/client").$Enums.BookingStatus;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
        commissionTotal: import("@prisma/client/runtime/library").Decimal;
        paymentIntent: string;
        bookingDate: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__BookingClient<{
        id: number;
        userId: number;
        serviceId: number;
        status: import(".prisma/client").$Enums.BookingStatus;
        totalPrice: import("@prisma/client/runtime/library").Decimal;
        commissionTotal: import("@prisma/client/runtime/library").Decimal;
        paymentIntent: string;
        bookingDate: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
