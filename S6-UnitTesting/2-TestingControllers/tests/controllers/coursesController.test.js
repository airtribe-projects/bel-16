const coursesController = require("../../src/controllers/coursesController");
const coursesModel = require("../../src/models/coursesModel");

jest.mock("../../src/models/coursesModel");

// beforeAll --> Setting up environment
// beforeEach
// afterAll --> Teardown environment
// afterEach







// Used to define your test suite
describe("Testing courses Controller", () => {

    afterEach(() => {
        jest.clearAllMocks();
    })

    describe("Testing getAllcourses method", () => {
        it("Should return all the courses", () => {
            const mockCourses = [{ _id: "1", name: "Course 1" }, { _id: "2", name: "Course 2" }];
            coursesModel.find.mockReturnValue(mockCourses);
            
            const result = coursesController.getAllCourse();
            
            expect(result).toBe(mockCourses);
            expect(coursesModel.find).toHaveBeenCalledTimes(1)
        })
    });
})



