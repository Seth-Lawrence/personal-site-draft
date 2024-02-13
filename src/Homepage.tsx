import Linkedin from "./Linkedin";
import ProfilePicture from "./ProfilePicture";
import { BrowserRouter as Router } from "react-router-dom";

function Homepage() {

    return (
        <div>
            <ProfilePicture />
            <Linkedin />
        </div>

    );
}

export default Homepage;
