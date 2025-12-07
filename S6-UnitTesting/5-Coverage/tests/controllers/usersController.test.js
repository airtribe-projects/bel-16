require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usersModel = require("../../src/models/usersModel");

const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const { registerUser, loginUser } = require("../../src/controllers/usersController");

let mongoServer;
const JWT_SECRET = process.env.JWT_SECRET


// Lifecycle Hook
beforeAll(async () => {
    // Create an in-memory MongoDB instance
    mongoServer = await MongoMemoryServer.create();
    const uri = await mongoServer.getUri();
    
    // [IMP Step] Connect mongoose to the in-memory database
    await mongoose.connect(uri);
});

afterAll(async () => {
    // Close the connection to the in-memory database
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
});

beforeEach(async () => {
    // Clear the database before each test
    await usersModel.deleteMany({});
});

describe('User Authentication Tests', () => {
    describe('Test registerUser function', () => {
        it('should register a new user successfully with all fields', async () => {
            const user = {
                name: "John Doe",
                email: "test@example.com",
                password: "password123",
                role: "user"
            };
            
            const plainTextPassword = user.password;
            const dbUser = await registerUser(user);

            expect(dbUser).toHaveProperty("_id");
            expect(dbUser.name).toBe(user.name);
            expect(dbUser.email).toBe(user.email);
            expect(dbUser.role).toBe(user.role);
            
            // console.log(plainTextPassword, user.password, dbUser.password);
            expect(bcrypt.compareSync(user.password, dbUser.password)).toBe(true);
        }, 10000)

        it('should throw an error if name is missing', async () => {
            const user = {
                email: "test2@example.com",
                password: "password123",
                role: "user"
            };
            await expect(registerUser(user)).rejects.toThrow("User validation failed: name: Path `name` is required.");    
        }, 10000)

        it('should throw an error if email is already in use', async () => {
            const user1 = {
                name: "John Doe",
                email: "duplicate@example.com",
                password: "password123",
                role: "user"
            };

            const user2 = {
                name: "Jane Doe",
                email: "duplicate@example.com", // Same email
                password: "password456",
                role: "admin"
            };

            // Register first user
            await registerUser(user1);

            // Try to register second user with the same email
            await expect(registerUser(user2)).rejects.toThrow("E11000 duplicate key error collection");
        }, 10000);

        it('should default role to "user" if role is not provided', async () => {
            const user = {
                name: "No Role User",
                email: "norole@example.com",
                password: "password123"
            };

            const dbUser = await registerUser(user);

            expect(dbUser.role).toBe("user"); // Default role should be "user"
        }, 10000);
    })

    describe('Test loginUser function', () => {
        test('should return an error when the password is incorrect', async () => {
            const user = {
                name: "John Doe",
                email: "test@example.com",
                password: "password123",
                role: "user"
            };
            await registerUser(user);

            const wrongPassword = "wrongpassword";

            await expect(loginUser(user.email, wrongPassword)).rejects.toThrow("Invalid Password");
        }, 10000);

        test('should successfully login a user with correct credentials', async () => {
            const user = {
                name: "John Doe",
                email: "test@example.com",
                password: "password123",
                role: "user"
            };
            await registerUser(user);
            const token = await loginUser(user.email, user.password);

            expect(token).toBeDefined();
            const decodedToken = jwt.verify(token, JWT_SECRET);
            expect(decodedToken.email).toBe(user.email);
            expect(decodedToken.role).toBe(user.role);
        }, 10000)
    })
})
