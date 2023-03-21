export class Person {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    id?: number;

    constructor(firstName: string, lastName: string, email: string, age: number, id?: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.id = id;
    }
}