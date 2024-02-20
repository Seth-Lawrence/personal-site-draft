import './Github.css';
import { FaGithub } from "react-icons/fa";


function Github({ redirect }: { redirect: Function; }) {

    return (
        <div className='Github'>
            <a onClick={(evt) => redirect(evt, 'https://www.github.com/Seth-Lawrence')}>
                <FaGithub>
                </FaGithub>
            </a>
        </div>
    );
}

export default Github;