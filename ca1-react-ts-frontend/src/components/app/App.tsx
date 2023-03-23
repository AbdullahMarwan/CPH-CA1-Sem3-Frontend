import React, {useState} from 'react'
import './App.scss'
import NavigationBar from "../navigationbar/NavigationBar";
import FrontPage from "../frontpage/FrontPage";
import CreatePerson from "../person/CreatePerson";

import {
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";

import {
    Grid,
    Column,
} from "carbon-components-react";
import ListHobbies from "../hobby/ListHobbies";
import RouteNotFound from "../routenotfound/RouteNotFound";
import {Constants} from "../misc/Constants";

const constants = new Constants();

const router = createBrowserRouter([
    {
        path: constants.NAVIGATION_PATH_FRONTPAGE,
        element: (
            <FrontPage/>
        ),
        errorElement: (
            <RouteNotFound/>
        )
    },
    {
        path: constants.NAVIGATION_PATH_CREATE_PERSON,
        element: (
            <CreatePerson/>
        ),
        errorElement: (
            <RouteNotFound/>
        )
    },
    {
        path: constants.NAVIGATION_PATH_LIST_HOBBIES,
        element: (
            <ListHobbies/>
        ),
        errorElement: (
            <RouteNotFound/>
        ),
    },
]);

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

                <Column md={8} lg={12}>
                    <RouterProvider router={router}/>
                </Column>
            </Grid>
        </div>

    )
}

