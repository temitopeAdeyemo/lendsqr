const request = require("supertest");
const App = require("../src/shared/app").default;
const app = new App().getApp();

describe("Auth API", () => {
  it("should be able to register new user", async () => {
    const response = await request(app).post("/v1/auth/register").send({
      full_name: "test",
      email: "test",
      password: "test",
      phoneNumber: "08134009444"
    });

    expect(response.statusCode).toBe(201);
    expect(response.body.message).toBe("User created successfully");
  }).timeout(10000);

  it("should be able to login a user", async () => {
    const response = await request(app).post("/v1/auth/login").send({
      email: "test",
      password: "test",
    });

    expect(response.statusCode).toBe(200);
    expect(response.status).toBe("success");
  }).timeout(10000);
});
