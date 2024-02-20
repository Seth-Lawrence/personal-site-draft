import { ReactEventHandler } from "react";

function Button(
    { functionality }: {functionality:ReactEventHandler}) {

    return (
        <div>
            <button onClick={functionality}></button>
        </div>
    )
}

export default Button;