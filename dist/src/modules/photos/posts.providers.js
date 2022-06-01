"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.photosProviders = void 0;
const photos_entity_1 = require("./photos.entity");
const constants_1 = require("../../core/constants");
exports.photosProviders = [
    {
        provide: constants_1.PHOTO_REPOSITORY,
        useValue: photos_entity_1.Photo,
    },
];
//# sourceMappingURL=posts.providers.js.map