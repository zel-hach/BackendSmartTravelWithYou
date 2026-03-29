"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrouptripsController = void 0;
const common_1 = require("@nestjs/common");
const grouptrips_service_1 = require("./grouptrips.service");
const create_grouptrip_dto_1 = require("./dto/create-grouptrip.dto");
const update_grouptrip_dto_1 = require("./dto/update-grouptrip.dto");
let GrouptripsController = class GrouptripsController {
    grouptripsService;
    constructor(grouptripsService) {
        this.grouptripsService = grouptripsService;
    }
    create(createGrouptripDto) {
        return this.grouptripsService.create(createGrouptripDto);
    }
    findAll() {
        return this.grouptripsService.findAll();
    }
    findOne(id) {
        return this.grouptripsService.findOne(+id);
    }
    update(id, updateGrouptripDto) {
        return this.grouptripsService.update(+id, updateGrouptripDto);
    }
    remove(id) {
        return this.grouptripsService.remove(+id);
    }
};
exports.GrouptripsController = GrouptripsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_grouptrip_dto_1.CreateGrouptripDto]),
    __metadata("design:returntype", void 0)
], GrouptripsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GrouptripsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GrouptripsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_grouptrip_dto_1.UpdateGrouptripDto]),
    __metadata("design:returntype", void 0)
], GrouptripsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GrouptripsController.prototype, "remove", null);
exports.GrouptripsController = GrouptripsController = __decorate([
    (0, common_1.Controller)('grouptrips'),
    __metadata("design:paramtypes", [grouptrips_service_1.GrouptripsService])
], GrouptripsController);
//# sourceMappingURL=grouptrips.controller.js.map