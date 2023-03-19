import {useEffect, useState} from "react";
import {Hobby} from "../../models/Hobby";
import {ApiHelper} from "../../helpers/ApiHelper";
import LoadingView from "../misc/LoadingView";

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
                    <h1>Hobby</h1>
                    <div>
                        {
                            hobbies && hobbies.map((hobby: Hobby) => {
                                return <div>
                                    <p>{hobby.id}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
                :
                <LoadingView/>
            }
        </div>
    )
}