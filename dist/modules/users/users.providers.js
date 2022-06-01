"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersProviders = void 0;
const user_entity_1 = require("./user.entity");
const constants_1 = require("../../core/constants");
exports.usersProviders = [
    {
        provide: constants_1.USER_REPOSITORY,
        useValue: user_entity_1.User,
    },
];
//# sourceMappingURL=users.providers.js.map