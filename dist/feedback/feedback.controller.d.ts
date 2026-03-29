import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
export declare class FeedbackController {
    private readonly feedbackService;
    constructor(feedbackService: FeedbackService);
    create(dto: CreateFeedbackDto): import(".prisma/client").Prisma.Prisma__FeedbackClient<{
        id: number;
        userId: number | null;
        rating: number | null;
        message: string;
        createdAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        user: {
            email: string;
            name: string | null;
            id: number;
        } | null;
    } & {
        id: number;
        userId: number | null;
        rating: number | null;
        message: string;
        createdAt: Date;
    })[]>;
}
