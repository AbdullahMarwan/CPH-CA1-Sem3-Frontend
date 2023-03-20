import React, {useEffect, useState} from "react";
import {ApiHelper} from "../../helpers/ApiHelper";

import {
    Link,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell
} from "carbon-components-react";
import {Hobby} from "../../models/Hobby";
import LoadingView from "../misc/LoadingView";

export default function FrontPage() {
    const [loading, setLoading] = useState(true);

    return (
        <div>
            {!loading ?
                <div>
                <h1>FrontPage CA1</h1>
                </div>
                :
                <LoadingView/>
            }
        </div>
    )
}