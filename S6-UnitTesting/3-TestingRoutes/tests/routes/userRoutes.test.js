const request = require("supertest");
const express = require("express");
const router = require("../../src/routes/usersRoute"); 
const { registerUser, loginUser } = require("../../src/controllers/usersController"); 

jest.mock("../../src/controllers/usersController");

const app = express();
app.use(express.json());
app.use(router);

describe('User Authentication Routes', () => {
    describe('POST /register', () => {
        it('should successfully register a user', async () => {
            const user = {
                name: "John Doe",
                email: "john@example.com",
                password: "password123",
                role: "user"
            };

            registerUser.mockResolvedValue(user);

            const response = await request(app)
                                .post('/register')
                                .send(user)
                                .expect(201);
            // toBe ==> Primitive comparison
            // toEquals ==> Deep comparison
            // toEquals v/s toStrictEquals
            // expect(response.body).toBe(user);
            expect(response.body).toEqual(user);
            expect(registerUser).toHaveBeenCalledWith(user);
        })
    })

    describe('POST /login', () => {
        it('should successfully log in a user and return a token', async () => {
            const user = {
                email: "john@example.com",
                password: "password123"
            };

            const token = "sample.jwt.token";

            // Mock the loginUser function to return a token
            loginUser.mockResolvedValue(token);

            const response = await request(app)
                .post('/login')
                .send(user)
                .expect(200);

            expect(response.body.token).toBe(token);
            expect(loginUser).toHaveBeenCalledWith(user.email, user.password); // Check if the controller was called with the correct data
        });
    })
})


