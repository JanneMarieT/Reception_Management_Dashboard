/*----- class inheritance -------*/
class Employee {
    name;
    surname;

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

class Staff_Member extends Employee {
    picture;
    email;
    status
    outTime;
    duration;
    expectedReturnTime;

    constructor(name, surname, picture, email, status, outTime, duration, expectedReturnTime) {
        super(name, surname);
        this.picture = picture;
        this.email = email;
        this.status = status;
        this.outTime = outTime;
        this.duration = duration;
        this.expectedReturnTime = expectedReturnTime;
    }

    staffMemberIsLate() {
        return ('Name: ' + this.name + '<br>' + 'Surname: ' + this.surname + '<br>' + 'Time away: ' + this.duration);
    }
}

class Delivery_driver extends Employee {
    vehicle;
    telephone;
    deliverAddress;
    returnTime;

    constructor(name, surname, vehicle, telephone, deliverAddress, returnTime) {
        super(name, surname);
        this.id = Date.now(); //generate a unique ID for the driver
        this.vehicle = vehicle;
        this.telephone = telephone;
        this.deliverAddress = deliverAddress;
        this.returnTime = returnTime;
    }

    deliveryDriverIsLate() {
        return ('Full Name: ' + this.name + '' + this.surname + '<br>' + 'phone number: ' + this.telephone +
            '<br>' + 'Was suppose to return: ' + this.returnTime +
            '<br>' + 'Delivery address: ' + this.deliverAddress + '<br>' + '<br>');
    }
}

