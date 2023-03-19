import {useEffect, useState} from "react";
import {Hobby} from "../../models/Hobby";
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

export default function Hobbies() {
    const [hobbies, setHobbies] = useState(null);
    const [loading, setLoading] = useState(true);

    const tableHeadings = [
        'ID',
        'Link',
        'Category',
        'Type'
    ];

    useEffect(() => {
        new ApiHelper().fetchHobbies()
            .then(r => {
                setHobbies(r);
                setLoading(false);
            });
    }, [])

    return (
        <div>
            {!loading ?
                <div>
                    <h1>Hobbies</h1>
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
                                {hobbies.map((row: Hobby) => (
                                    <TableRow key={row.id}>{Object.keys(row)
                                        //.filter((key) => key !== 'id')
                                        .map((key) => {
                                            return <TableCell key={key}>
                                                {key == 'Link' ?
                                                    <Link href={row[key]}>
                                                        Link
                                                    </Link>
                                                    :
                                                    row[key]
                                                }
                                            </TableCell>;
                                        })}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        {/*
                        {
                            hobbies && hobbies.map((hobby: Hobby) => {
                                return <div>
                                    <p>{hobby.id}</p>
                                </div>
                            })
                        }
                        */}
                    </div>
                </div>
                :
                <LoadingView/>
            }
        </div>
    )
}