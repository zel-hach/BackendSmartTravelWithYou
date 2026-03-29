import { BookingStatus } from '@prisma/client';
export declare class CreateBookingDto {
    userId: number;
    serviceId: number;
    status?: BookingStatus;
    totalPrice: number;
    commissionTotal?: number;
    paymentIntent?: string;
}
