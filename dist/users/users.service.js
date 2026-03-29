"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const bcrypt = __importStar(require("bcrypt"));
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    prisma;
    jwtService;
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async register(createUserDto) {
        try {
            const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
            const name = createUserDto.name?.trim();
            const user = await this.prisma.users.create({
                data: {
                    email: createUserDto.email,
                    password: hashedPassword,
                    ...(name ? { name } : {}),
                },
                select: { id: true, email: true, name: true },
            });
            return user;
        }
        catch (error) {
            throw new Error('Failed to register user');
        }
    }
    async login(email, password) {
        try {
            const user = await this.prisma.users.findUnique({
                where: { email },
                select: { id: true, email: true, name: true, password: true },
            });
            if (!user)
                return null;
            const passwordMatches = await bcrypt.compare(password, user.password);
            if (!passwordMatches)
                return null;
            const { password: _password, ...safeUser } = user;
            const payload = { id: user.id, email: user.email };
            const token = this.jwtService.sign(payload, { expiresIn: '1h' });
            return {
                user: safeUser,
                access_token: token,
            };
        }
        catch {
            throw new Error('Failed to login User');
        }
    }
    async findAll() {
        try {
            const Users = await this.prisma.users.findMany();
            return Users;
        }
        catch (error) {
            throw new Error('Failed to get Users');
        }
    }
    async findOne(id) {
        const user = await this.prisma.users.findUnique({
            where: { id },
            select: { id: true, email: true, name: true },
        });
        return user;
    }
    async update(id, updateUserDto) {
        const data = {};
        if (updateUserDto.email !== undefined)
            data.email = updateUserDto.email;
        if (updateUserDto.name !== undefined)
            data.name = updateUserDto.name;
        if (updateUserDto.password) {
            data.password = await bcrypt.hash(updateUserDto.password, 10);
        }
        return this.prisma.users.update({
            where: { id },
            data,
            select: { id: true, email: true, name: true },
        });
    }
    async remove(id) {
        return this.prisma.users.delete({ where: { id } });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map