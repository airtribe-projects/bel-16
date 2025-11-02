### Course Rating Service

- Write REST APIs
    - List all courses
    - Get details of a course
    - Update a course
    - get ratings of a course


#### Assumptions
serviceName: course-rating-service
version: v1

#### List all courses
GET /v1/course ==> REST Principle
GET /v1/courses ==> We should use this
GET /v1/courses/:id ==> Not getting any specific course
GET /v1/getCourses ==> Don't club verb and resource

GET /v1/courses?ids=1,2,3 ==> We should use this
GET /v1/courses?id=1

#### Get details of a course
GET /v1/courses/:courseId?limit=10
GET /v1/courses/:id

:courseId ==> Path params
limit: ==> query params


####  Update a course

PUT  /v1/courses/:id --> REPLACE (Change the entire resource)
PATCH  /v1/courses/:id --> UPDATE (Change soe part of the resource)

When to use PUT an when to use PATCH 

BODY : {

}


#### Get ratings of a course

GET /v1/courses/:id/ratings
GET /v1/ratings/courses/:id ==> 
GET /v1/courses/id?ratings ==> Not be an option, query params should have a value
GET /v1//courses/ratings?courseId=101 ==> Not a good practice
GET /v1/ratings?courseId={courseId}


GET /v1/courses/ratings?courseId=101 ==> Not a good practice
GET /v1/ratings/courses/:id ==> 
GET /v1/ratings/:ratingId/courses/:coursesId


Possible Options:
GET /v1/courses/:id/ratings
GET /v1/ratings?courseId:{courseId}

Use case (Zomato)
/v1/restaurants ==> 
/v1/ratings?


#### Create a course

POST /api/v1/courses

body: Course Details


 