import { ItineraryStatus } from '@prisma/client';
export declare class CreateItineraryDto {
    userId: number;
    title: string;
    status: ItineraryStatus;
    days: any[];
    totalPrice: number | string;
    intakeForm: any[];
}
