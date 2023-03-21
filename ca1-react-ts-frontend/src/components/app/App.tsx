import {useState} from 'react'
import './App.scss'
import NavigationBar from "../navigationbar/NavigationBar";
import FrontPage from "../frontpage/FrontPage";

import {
    Grid,
    Column,
    FlexGrid,
    Row
} from "carbon-components-react";
import CreatePerson from "../person/CreatePerson";

export default function App() {
    const [open, setOpen] = useState (false);

    return (
        <div className="App">
            <NavigationBar isOpen={open} setOpen={setOpen}/>

            <Grid>
                <br/>

                <Column md={8} lg={12}>
                    <CreatePerson/>
                </Column>
            </Grid>
        </div>
    )
}

