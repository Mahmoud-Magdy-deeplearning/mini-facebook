"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = void 0;
const paginate = (query, { page, pageSize }) => {
    const offset = page * pageSize;
    const limit = pageSize;
    return Object.assign(Object.assign({}, query), { offset,
        limit });
};
exports.paginate = paginate;
//# sourceMappingURL=pagination.js.map