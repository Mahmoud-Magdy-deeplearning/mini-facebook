"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_module_1 = require("./auth.module");
const request = require("supertest");
const testing_1 = require("@nestjs/testing");
const auth_service_1 = require("./service/auth.service");
describe('Cats', () => {
    let app;
    const authService = { register: () => ['test'] };
    beforeAll(async () => {
        const moduleRef = await testing_1.Test.createTestingModule({
            imports: [auth_module_1.AuthModule],
        })
            .overrideProvider(auth_service_1.AuthService)
            .useValue(authService)
            .compile();
        app = moduleRef.createNestApplication();
        await app.init();
    });
    it(`/POST Register`, () => {
        return request(app.getHttpServer())
            .post('/auth/signup')
            .expect(200)
            .expect({
            data: authService.findAll(),
        });
    });
    afterAll(async () => {
        await app.close();
    });
});
//# sourceMappingURL=auth.spec.e2e.js.map