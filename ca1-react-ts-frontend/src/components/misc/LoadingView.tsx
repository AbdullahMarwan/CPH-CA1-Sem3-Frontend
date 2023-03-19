import {
    Loading
} from "carbon-components-react";

export default function LoadingView() {
    return(
        <div>
            <p>Loading</p>
            <Loading className={'some-class'}
                     withOverlay={false}/>
        </div>
    )
}