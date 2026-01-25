3. Detail Design of the System (30 minutes)
    - Go entity by entity
    - Identify the attributes of these entities
    - Identify the behaviour of these entitites
    - Identify the relationship between entitites
    
    - Where to start?
        - Top to Bottom Approach 
            - Start with the biggest entity and try figuringn out the related entities
        - Bottom to top approach 
            - Start with the smallest entity and then build around it

### Detail Design of the system
#### Vehicle
- id: <String>          // registrationId
- type : <VechicleType> (Aproach 2 discarded)
- type : <ENUM>       
- has-a (Strong)
- pass: <ENUM>          // monthly, weekly, daily, none
----------------------
+ attachPass(pass): boolean


#### Pass:
- type: <ENUM> 
- startTime:
- endTime: 
--------------
+ isPassValid()

#### VehicleType (Approch 2)
- name: <String>        // Bus, Car
- length:               // Sub 4m, 4.3m     
- wheels:               // 2W, 3W, 4W

#### ParkingSpot
- id: <String>
- type: <ENUM>
<!-- - floor: <ParkingFloor> | null -->
- isOccupied: <Boolean>
- isUnderMaintainence: <Boolean>
------------------
+ isAvailable(): boolean
+ park():
+ unpark():
+ putUnderMaintainence()
+ removeFromMaintainence()
-- Getters are setters for attributes

#### ParkingFloor
parkingSpots: [<ParkingSpot>]   // HAS-A (STRONG) With ParkingSpot

// Optional 
entryGate: 
exitGate: 
-----------------------
getAvailableSpotForParking(SpotSize): Spot | null 
getAvailableSpot(): Spot[] // For display perspective
Getters / Setters are avialable
isFloorFull(): Boolean

### ParkingLot
exitGate: ExitGate (HAS-A Strong)
entryGate: EntryGate (HAS-A Strong)
parkingFloors: ParkingFloor[] (Has-A Strong)
+ isClosed: boolean   // No more intake
Ticket --> Uses - A Relationship 
Vehicle --> Uses - A Relationship 
DisplayPanel Strong Has-A Relationship 

----
isFull(): Boolean
- composeDisplayMessage(ParkingFloor): String
parkVehicle(vehicle): ParkingTicket

unparkVehicle(Ticket): Boolean

#### DisplayPanel
showMessage(message)

#### EntryGate
Uses-A Ticket, Vehicle, ParkingFloor
-------------------
getSpotToPark(ParkingFloors, vehicleType): ParkingSpot
generateParkingTicket(vehicle, parkingSpot): ParkingTicket
- generateSpotTypeBasedOnVehicleType(vechicleType): SpotType

#### ExitGate
Uses - A Ticket, 
PaymentProcessor Has-A (Strong) 
-----------------
checkout(Ticket): Boolean


#### ParkingTicket
vehicle: Vechicle (Weak has- A)
spot: ParkingSpot | null (Weak has - A) 
message: string
parkingFloor (?)
entryTime
exitTime
totalAmount: number 
amountPaid: <Boolean>

---------------
gettter and setters for almost all of the attributes



