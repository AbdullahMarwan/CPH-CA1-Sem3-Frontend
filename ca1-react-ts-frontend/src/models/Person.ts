export class Person {
    firstname: string;
    lastname: string;
    email: string;
    age: number;
    id?: number;

    constructor(firstname: string, lastname: string, email: string, age: number, id?: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.age = age;
        this.id = id;
    }
}