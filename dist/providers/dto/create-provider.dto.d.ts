import { Category } from '@prisma/client';
export declare class CreateProviderDto {
    name: string;
    city: string;
    category: Category;
    photo?: string[];
    location: any;
    isActive?: boolean;
}
