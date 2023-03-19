import {useState} from 'react'
import './App.scss'
import Hobbies from "../hobby/Hobbies";

function App() {
    return (
        <div className="App">
            <Hobbies/>
        </div>
    )
}

/* TODO
Get all hobbies
Get all persons with a given hobby
Get all persons living in a given city (i.e. 2800 Lyngby)
Get the all people with a given hobby
Get a list of all postcodes in Denmark
Create a Person (with hobbies, phone, address etc.)
Delete an address
Edit a Person to change hobbies and phone numbers etc.
 */


export default App
