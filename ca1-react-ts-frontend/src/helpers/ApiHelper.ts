import {Hobby} from "../models/Hobby";

export class ApiHelper {
    async fetchHobbies(): Promise<Hobby[]> {
        return fetch('http://localhost:8080/hobbies/')
            .then(res => res.json())
            .then(hobbyData => {
                return hobbyData;
            });
    }
}