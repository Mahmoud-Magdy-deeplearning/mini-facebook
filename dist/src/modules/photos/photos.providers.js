"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.photosProviders = void 0;
const photo_entity_1 = require("./model/photo.entity");
const constants_1 = require("../../core/constants");
exports.photosProviders = [
    {
        provide: constants_1.PHOTO_REPOSITORY,
        useValue: photo_entity_1.Photo,
    },
];
//# sourceMappingURL=photos.providers.js.map