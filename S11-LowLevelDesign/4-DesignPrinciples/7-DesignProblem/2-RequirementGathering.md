### Problem Statement 
- Design a parking lot

1. Gathering Requirements (5-10 minutes)
    - Focus time exploring all the diffrent angles
    - Assumption --> State it upfront 
        - Confirm from the interviewer before proceeding
    - Confirm from the interviewer that al the requirements are met
    - Functional 
    - Non Functional
        - Modular code
        - Scalable
        - Low Coupling


#### Requirements:
- Parking on Land: Yes
- Support parking of 2W as well as 4W
- How many entrance and exits? 1 entry and 1 exit
    - This is generally and extension problem
    - Wanted to test the knowledge of concurrency
- Size of Parking Lot: Configurable 
- Support for levels: Yes
- Payment: 
    - Fixed
    - Hourly basis
    - monthly pass
    - VIP 
        - Vehicle Tag
    - Depends on the type of vehicle? Yes
    - Integrate Payment Gateway --> There should be layer    
- Security System: Not concerned
- Allocation Approach:
    - Flexible
- Support for available capacity: Yes
- Reserved Parking Spaces -> No  
- Open 24 hours: Yes
- Concept of Ticket: Yes
    - Support Fastag: No
- Do we support different parking spot types: yes
- Valet: No
- Capture Entry and Exit Times: yes
- Inappropriately parked vehicle: No need
- Where should I pay? 
    - Pay at entry and track time at exit
    - Pay at exit: Let's go with this
    - Client specific
    - Pay a fixed amount for a specific duration and then pay additional amount if parked for more than the paid durartion: No
- Should we support complians / suggestions: No
- Passes are attached to vehicle: Yes
- Ticket should be generated when the vehicle enters the lot
