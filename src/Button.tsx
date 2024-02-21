import { Dispatch, SetStateAction } from "react";
import './Button.css'

interface buttonProps {
    functionality: Dispatch<SetStateAction<Boolean>>
    text: string
}

function Button(
    { functionality, text }: buttonProps) {

    return (
        <div className='Button-container'>
            <button className='Button' onClick={():void => {functionality}}>{text}</button>
        </div>
    )
}

export default Button;