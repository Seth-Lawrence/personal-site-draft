import './Github.css';
import { FaGithub } from "react-icons/fa";

// interface NavigationProps {
//     redirect(evt: React.MouseEvent, path: string): void
//   }

function Github({redirect}: {redirect:Function}) {

    return (
        <a onClick={(evt) => redirect(evt, 'https://www.github.com/Seth-Lawrence')}>
            <FaGithub className='Github'></FaGithub>
        </a>
    );
}

export default Github;