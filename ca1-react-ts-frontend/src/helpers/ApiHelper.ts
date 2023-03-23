import {Hobby} from "../models/Hobby";
import {Person} from "../models/Person";

export class ApiHelper {
    async fetchHobbies(): Promise<Hobby[]> {
        return fetch('http://localhost:8080/hobbies/')
            .then(res => res.json())
            .then(hobbyData => {
                return hobbyData;
            });
    }

    async fetchPersons(): Promise<Person[]> {
        return fetch('http://localhost:8080/persons/')
            .then(res => res.json())
            .then(personData => {
                return personData;
            });
    }

    async submitPerson(person: Person) {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(person)
        };

        fetch('http://localhost:8080/persons/', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
        //TODO Read response from server and parse to CreatePerson component
        //.then(data => this.setState({postId: data.id}));
    }
}