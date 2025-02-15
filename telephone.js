class Telephone {
    constructor() {
        this.phoneNumbers = new Set(); // To store unique phone numbers
        this.observers = new Set(); // To store observer instances
    }

    // Method to add a phone number
    AddPhoneNumber(number) {
        this.phoneNumbers.add(number);
    }

    // Method to remove a phone number
    RemovePhoneNumber(number) {
        this.phoneNumbers.delete(number);
    }

    // Method to dial a phone number
    DialPhoneNumber(number) {
        if (this.phoneNumbers.has(number)) {
            console.log(`Dialing ${number}...`);
            this.notifyObservers(number);
        } else {
            console.log(`Phone number ${number} is not available.`);
        }
    }

    // Method to add an observer
    addObserver(observer) {
        this.observers.add(observer);
    }

    // Method to remove an observer
    removeObserver(observer) {
        this.observers.delete(observer);
    }

    // Method to notify all observers
    notifyObservers(number) {
        this.observers.forEach(observer => observer.update(number));
    }
}

// Observer class
class Observer {
    constructor(name, callback) {
        this.name = name;
        this.callback = callback;
    }

    update(number) {
        this.callback(number);
    }
}

// Creating telephone instance
const telephone = new Telephone();

// Creating observers
const printNumberObserver = new Observer("PrintNumber", (number) => console.log(number));
const dialingMessageObserver = new Observer("DialingMessage", (number) => console.log(`Now Dialing ${number}`));

// Adding observers to telephone
telephone.addObserver(printNumberObserver);
telephone.addObserver(dialingMessageObserver);

// Adding phone numbers
telephone.AddPhoneNumber("2347023232");
telephone.AddPhoneNumber("2348034567");

// Dialing a phone number
telephone.DialPhoneNumber("2347023232");
// Output:
// Dialing 2347023232...
// 2347023232
// Now Dialing 2347023232
