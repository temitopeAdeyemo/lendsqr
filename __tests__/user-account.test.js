const request = require("supertest");
const App = require("../src/shared/app").default;
const app = new App().getApp();

describe("Account API", () => {
  it("should be able to fund bank account", async () => {
    const response = await request(app)
      .post("/v1/account/fund")
      .set("Authorization", "Bearer " + token)
      .send({
        amount: 100,
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("User bank account funded successfully");
  }).timeout(10000);

  it("authenticated user should be able to transfer funds to another user", async () => {
    const response = await request(app)
      .post("/v1/account/transfer-fund")
      .set("Authorization", "Bearer " + token)
      .send({
        amount: "100",
        accountNumber: "08134844747",
        pin: "1234",
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Fund transferred successfully");
  }).timeout(10000);

  it("authenticated user should be able to withdraw funds from their account", async () => {
    const response = await request(app)
      .post("/v1/account/withdraw-fund")
      .set("Authorization", "Bearer " + token)
      .send({
        amount: "100",
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Fund withdrawn successfully");
  }).timeout(10000);
});
