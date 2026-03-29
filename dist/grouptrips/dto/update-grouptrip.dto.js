"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGrouptripDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_grouptrip_dto_1 = require("./create-grouptrip.dto");
class UpdateGrouptripDto extends (0, mapped_types_1.PartialType)(create_grouptrip_dto_1.CreateGrouptripDto) {
}
exports.UpdateGrouptripDto = UpdateGrouptripDto;
//# sourceMappingURL=update-grouptrip.dto.js.map