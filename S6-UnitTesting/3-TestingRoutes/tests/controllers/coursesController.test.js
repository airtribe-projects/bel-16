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

    describe("Testing getACourse method", () => {
        it("should return a course if found",  () => {
            const mockCourse = { _id: "1", name: "Course 1" };

            coursesModel.findById = jest.fn().mockImplementation((id) => {
                return id === 10 ? mockCourse : null;
            });
            
            const result = coursesController.getACourse(10);
            expect(result).toBe(mockCourse);
            expect(coursesModel.findById).toHaveBeenCalledTimes(1);
            expect(coursesModel.findById).toHaveBeenCalledWith(10);
        })



        // Assignment: Should not accept anything other than string
        // 

        it("Should throw an error if course not found",  () => {
            coursesModel.findById = jest.fn().mockImplementation((id) => {
                throw new Error('Course not found');
            });
            
            // Errors Should not be handled like this
            // const result = coursesController.getACourse(10);
            // expect(result).toThrow("Course not found");
           
           
            expect(() => coursesController.getACourse(999)).toThrow("Course not found");
            expect(coursesModel.findById).toHaveBeenCalledWith(999);   
        })
        
    })

    describe("Test creation of a course", () => {
        it("should create and return a new course",  () => {
            const mockCourse = { name: "New Course" };
            const savedCourse = { _id: "3", ...mockCourse };
            coursesModel.create.mockReturnValue(savedCourse);

            const result =  coursesController.createACourse(mockCourse);

            expect(result).toBe(savedCourse);
            expect(coursesModel.create).toHaveBeenCalledWith(mockCourse);        
        })
    })
})