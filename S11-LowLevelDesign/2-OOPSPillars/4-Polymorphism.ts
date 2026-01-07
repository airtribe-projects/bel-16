class Person {
    // Protected: Accessibility within the class hierarchy
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    protected getDetails() : string {
        return `Name: ${this.name}`
    }
}

class Employee extends Person {
    private role: string;

    constructor(name: string, role:string) {
        super(name);
        this.role = role;
    }

    // Method Overriding (Polymorphism)
    protected getDetails() : string {
        return `Name: ${this.name} (${this.role})`
    }

    // // Method OverLoading
    // protected getDetails(showRole: boolean) : string {
    //     if (showRole) {
    //         return `Name: ${this.name} (${this.role})`
    //     }
        
    //     return `Name: ${this.name}`;
    // }
}

// const jay = new Employee("Jay", "Engineer");

// jay.role;
// jay.name;

