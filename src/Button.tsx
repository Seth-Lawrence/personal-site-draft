import { Dispatch, SetStateAction } from "react";

interface buttonProps {
    functionality: Dispatch<SetStateAction<Boolean>>
    text: string
}

function Button(
    { functionality, text }: buttonProps) {

    return (
        <div>
            <button onClick={():void => {functionality}}>{text}</button>
        </div>
    )
}

export default Button;