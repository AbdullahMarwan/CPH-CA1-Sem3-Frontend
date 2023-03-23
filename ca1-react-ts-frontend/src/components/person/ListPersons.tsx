import {useEffect, useState} from "react";
import {Person} from "../../models/Person";
import {ApiHelper} from "../../helpers/ApiHelper";
import LoadingView from "../misc/LoadingView";

import {
    Link,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell
} from "carbon-components-react";

export default function ListPersons() {
    const [persons, setPersons] = useState(null);
    const [loading, setLoading] = useState(true);

    const tableHeadings = [
        'Firstname',
        'Lastname',
        'Email',
        'Age',
        'ID',
    ];

    useEffect(() => {
        new ApiHelper().fetchPersons()
            .then(r => {
                setPersons(r);
                setLoading(false);
            });
    }, [])

    return (
        <div>
            {!loading ?
                <div>
                    <h1>All Persons</h1>
                    <div>
                        <Table size="lg" useZebraStyles={false}>
                            <TableHead>
                                <TableRow>
                                    {tableHeadings.map((header) => (
                                        <TableHeader id={header.key} key={header}>{header}</TableHeader>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {persons.map((row: Person) => (
                                    <TableRow key={row.id}>{Object.keys(row)
                                        //.filter((key) => key !== 'id')
                                        .map((key) => {
                                            return <TableCell key={key}>
                                                {row[key]}
                                            </TableCell>;
                                        })}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        {}
                    </div>
                </div>
                :
                <LoadingView/>
            }
        </div>
    )
}