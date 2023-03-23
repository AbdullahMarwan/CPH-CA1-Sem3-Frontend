import React, {useState} from "react";
import LoadingView from "../misc/LoadingView";
import { useForm, SubmitHandler } from "react-hook-form";

import {
    Form,
    Stack,
    TextInput,
    Button,
    NumberInput,
}
from "carbon-components-react";
import {ApiHelper} from "../../helpers/ApiHelper";
import {Person} from "../../models/Person";

type Inputs = {
    example: string,
    exampleRequired: string,
};

export default function CreatePerson() {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        new ApiHelper().submitPerson(
            new Person(
                data.firstName,
                data.lastName,
                data.email,
                data.age,
                0
            )
        )
    };

    console.log(watch("example")) // watch input value by passing the name of it
    return (
        <div>
            {!loading ?
                <Stack gap={5}>
                    <h1 style={{
                        fontFamily: "IBM Plex Mono",
                        fontWeight: 500
                    }}>
                        Create person
                    </h1>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Stack gap={7}>
                            <TextInput type={"text"}
                                       labelText={"First name"}
                                       placeholder={"Barry"}
                                       {...register("firstName")}/>
                            <TextInput type={"text"}
                                       labelText={"Last name"}
                                       placeholder={"Allen"}
                                       {...register("lastName")}/>
                            <TextInput type={"text"}
                                       labelText={"Email"}
                                       placeholder={"BAAL@starlabs.com"}
                                       {...register("email")}/>

                            <NumberInput
                                id="carbon-number"
                                min={0}
                                max={100}
                                value={25}
                                label="Age"
                                helperText=""
                                invalidText="Number is not valid"
                                {...register("age")}
                            />

                            <Button type="submit" className="some-class">
                                Submit
                            </Button>
                        </Stack>
                    </Form>
                </Stack>
                :
                <LoadingView/>
            }
        </div>
    )
}