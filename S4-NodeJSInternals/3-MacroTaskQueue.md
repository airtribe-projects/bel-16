### MacroTask Queue
- 6 Components / 6 diffrent phases
- Phase 1: Timer (setTimeout, setInterval) => Developers use this pretty often

- Phase 2: Pending Callback Phase
    - TCP Errors, DNS errors, network Callbacks (Low level system errors)
- Phase 3: Idle / Prepare phase: Internally used by nodejs to maintain the event loop phase.  
- Phase 4: Poll Phase: 
    - All new i/O events and related calbacks like DB calls, FS calls, socket calls
- Phase 5: Check Phase
    - setImmediate callbacks
- Phase 6: Close Phase
    - Cleanup phase
    - Handles connection, socket, filesystem close events