import {useState} from 'react'
import './App.scss'
import NavigationBar from "../navigationbar/NavigationBar";
import FrontPage from "../frontpage/FrontPage";

function App() {
    return (
        <div className="App">
            <NavigationBar/>
            <FrontPage/>
        </div>
    )
}

export default App
