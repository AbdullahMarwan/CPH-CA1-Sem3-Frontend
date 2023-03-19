import {useEffect, useState} from "react";
import {Hobby} from "../../models/Hobby";
import {ApiHelper} from "../../helpers/ApiHelper";

export default function Hobbies() {
    const [hobbies, setHobbies] = useState(null);
    const [loading, setLoading] = useState(true);

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
                <p>loading</p>
            }
        </div>
    )
}