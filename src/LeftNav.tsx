import { Dispatch, SetStateAction } from "react";
import Button from "./Button"


interface leftNavProps {
    setShowAbout: Dispatch<SetStateAction<Boolean>>,
    setShowResume: Dispatch<SetStateAction<Boolean>>,
    setShowProjects: Dispatch<SetStateAction<Boolean>>,
    setIsLoading: Function
}

function LeftNav(
    {
        setShowAbout,
        setShowResume,
        setShowProjects
    }: leftNavProps) {


    return (
        <div>
            <Button functionality={setShowAbout} text='About' />
            <Button functionality={setShowResume} text='Resume' />
            <Button functionality={setShowProjects} text='Projects' />
        </div>
    )
}

export default LeftNav;
