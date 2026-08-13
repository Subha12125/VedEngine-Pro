import { describe, it, expect, beforeAll } from "vitest";
import buildApp from "../src/app.js";

describe("User & Auth API Integration Tests", () => {
    let app;
    let testUser;
    let authToken = "";

    beforeAll(async () => {
        testUser = {
            name: "Test User Auth",
            email: `test_auth_${Date.now()}_${Math.floor(Math.random() * 10000)}@example.com`,
            password: "Password123!"
        };
        app = await buildApp();
        await app.ready();
    }, 30000);

    describe("POST /api/v1/auth/register", () => {
        it("should reject registration with invalid payload (weak password)", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/v1/auth/register",
                payload: {
                    name: "Weak Pass User",
                    email: "weak@example.com",
                    password: "123"
                }
            });

            expect(response.statusCode).toBe(400);
            const body = JSON.parse(response.body);
            expect(body.success).toBe(false);
            expect(body.message).toBe("Validation error");
        });

        it("should register a new user successfully", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/v1/auth/register",
                payload: testUser
            });

            expect(response.statusCode).toBe(201);
            const body = JSON.parse(response.body);
            expect(body.success).toBe(true);
            expect(body.data).toBeDefined();
            expect(body.data.user.email).toBe(testUser.email.toLowerCase());
            expect(body.data.token).toBeDefined();

            authToken = body.data.token;
        }, 15000);

        it("should fail when registering with an existing email", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/v1/auth/register",
                payload: testUser
            });

            expect(response.statusCode).toBe(400);
            const body = JSON.parse(response.body);
            expect(body.success).toBe(false);
            expect(body.message).toBe("Email already exists");
        });
    });

    describe("POST /api/v1/auth/login", () => {
        it("should reject login with wrong password", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/v1/auth/login",
                payload: {
                    email: testUser.email,
                    password: "WrongPassword123!"
                }
            });

            expect(response.statusCode).toBe(401);
            const body = JSON.parse(response.body);
            expect(body.success).toBe(false);
            expect(body.message).toBe("Invalid credentials");
        });

        it("should login successfully with correct credentials", async () => {
            const response = await app.inject({
                method: "POST",
                url: "/api/v1/auth/login",
                payload: {
                    email: testUser.email,
                    password: testUser.password
                }
            });

            expect(response.statusCode).toBe(200);
            const body = JSON.parse(response.body);
            expect(body.success).toBe(true);
            expect(body.data.token).toBeDefined();
            expect(body.data.user.email).toBe(testUser.email.toLowerCase());
        });
    });

    describe("GET /api/v1/auth/profile", () => {
        it("should reject request without Authorization header", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/v1/auth/profile"
            });

            expect(response.statusCode).toBe(401);
            const body = JSON.parse(response.body);
            expect(body.success).toBe(false);
        });

        it("should return user profile with valid Bearer token", async () => {
            const response = await app.inject({
                method: "GET",
                url: "/api/v1/auth/profile",
                headers: {
                    authorization: `Bearer ${authToken}`
                }
            });

            expect(response.statusCode).toBe(200);
            const body = JSON.parse(response.body);
            expect(body.success).toBe(true);
            expect(body.data.user.email).toBe(testUser.email.toLowerCase());
            expect(body.data.user.name).toBe(testUser.name);
        });
    });

    describe("PUT /api/v1/auth/profile", () => {
        it("should update profile name successfully when authenticated", async () => {
            const updatedName = "Updated Test User Auth";
            const response = await app.inject({
                method: "PUT",
                url: "/api/v1/auth/profile",
                headers: {
                    authorization: `Bearer ${authToken}`
                },
                payload: {
                    name: updatedName
                }
            });

            expect(response.statusCode).toBe(200);
            const body = JSON.parse(response.body);
            expect(body.success).toBe(true);
            expect(body.data.user.name).toBe(updatedName);
        });
    });
});
