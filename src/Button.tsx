import { Dispatch, SetStateAction } from "react";
import './Button.scss'

interface buttonProps {
    handleClick: Function
    text: string
}

function Button(
    { handleClick, text }: buttonProps) {

    return (
        <div className='Button-container'>
            <button className='Button' onClick={():void => {handleClick(text)}}>{text}</button>
        </div>
    )
}

export default Button;
