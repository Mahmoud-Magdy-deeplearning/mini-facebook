"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redisStore = require("cache-manager-redis-store");
exports.default = {
    store: redisStore,
    host: process.env.REDIS_HOST,
    name: process.env.REDIS_NAME,
    port: 5003,
};
//# sourceMappingURL=redis.config.js.map