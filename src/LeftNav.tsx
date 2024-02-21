import React, { Dispatch, ReactEventHandler, SetStateAction } from "react";
import Button from "./Button";



function LeftNav({ handleClick }) {


    return (
        <div>
            <Button handleClick={handleClick} text='About' />
            <Button handleClick={handleClick} text='Resume' />
            <Button handleClick={handleClick} text='Projects' />
        </div>
    );
}

export default LeftNav;
