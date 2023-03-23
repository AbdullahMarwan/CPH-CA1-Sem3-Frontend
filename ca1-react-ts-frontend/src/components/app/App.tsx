import React, {useState} from 'react'
import './App.scss'
import NavigationBar from "../navigationbar/NavigationBar";

import {
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";

import {
    Grid,
    Column,
} from "carbon-components-react";
import {routes} from "./Routes";

const router = createBrowserRouter(
    routes
);

export default function App() {
    const [open, setOpen] = useState(false);

    return (
        <div className="App">
            <NavigationBar isOpen={open} setOpen={setOpen}/>
            <Grid>
                <br/>
                <br/>
                <br/>
                <br/>

                <Column lg={16}>
                    <RouterProvider router={router}/>
                </Column>
            </Grid>
        </div>
    )
}

