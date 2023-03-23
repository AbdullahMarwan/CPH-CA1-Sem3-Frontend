import FrontPage from "../frontpage/FrontPage";
import RouteNotFound from "../routenotfound/RouteNotFound";
import CreatePerson from "../person/CreatePerson";
import ListHobbies from "../hobby/ListHobbies";
import ListPersons from "../person/ListPersons";
import React from "react";
import {Constants} from "../misc/Constants";

const constants = new Constants();

export const routes = [
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
    {
        path: constants.NAVIGATION_PATH_LIST_PERSONS,
        element: (
            <ListPersons/>
        ),
        errorElement: (
            <RouteNotFound/>
        ),
    },
];