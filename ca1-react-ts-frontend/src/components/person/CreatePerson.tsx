import React, {useState} from "react";
import LoadingView from "../misc/LoadingView";
import {useForm, SubmitHandler, set} from "react-hook-form";

import {
    Form,
    Stack,
    TextInput,
    Button,
    NumberInput,
    ActionableNotification
}
    from "carbon-components-react";
import {ApiHelper} from "../../helpers/ApiHelper";
import {Person} from "../../models/Person";
import {useNavigate} from "react-router-dom";
import {Constants} from "../misc/Constants";

type Inputs = {
    example: string,
    exampleRequired: string,
};

export default function CreatePerson() {
    const [loading, setLoading] = useState(false);
    const [submissionSuccessful, setSubmissionSuccessful] = useState(false);
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        setLoading(true)

        new ApiHelper().submitPerson(
            new Person(
                data.firstName,
                data.lastName,
                data.email,
                data.age,
                0
            )
        )
        setTimeout(() => {
            setLoading(false);
            setSubmissionSuccessful(true);
        }, 3000)
    };

    console.log(watch("example")) // watch input value by passing the name of it
    return (
        <div>
            {
                submissionSuccessful ?
                    <ActionableNotification
                        title="Person has been created"
                        subtitle=""
                        inline={false}
                        kind={"success"}
                        hideCloseButton={true}
                        actionButtonLabel="See list of persons"
                        onActionButtonClick={() => {
                            navigate(new Constants().NAVIGATION_PATH_LIST_PERSONS)
                        }}
                    />
                    :
                    null
            }

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
                                   disabled={loading}
                                   {...register("firstName")}/>
                        <TextInput type={"text"}
                                   labelText={"Last name"}
                                   placeholder={"Allen"}
                                   disabled={loading}
                                   {...register("lastName")}/>
                        <TextInput type={"text"}
                                   labelText={"Email"}
                                   placeholder={"BAAL@starlabs.com"}
                                   disabled={loading}
                                   {...register("email")}/>

                        <NumberInput
                            id="carbon-number"
                            min={0}
                            max={100}
                            value={25}
                            label="Age"
                            helperText=""
                            disabled={loading}
                            invalidText="Number is not valid"
                            {...register("age")}
                        />

                        <Button type="submit" className="some-class" disabled={loading}>
                            Submit
                        </Button>

                        {loading ?
                            <LoadingView/>
                            :
                            null}
                    </Stack>
                </Form>
            </Stack>


        </div>
    )
}