import Linkedin from "./Linkedin";
import Signature from "./Signature";
import { Navbar, NavItem } from 'reactstrap';
import './Navigation.css';
import Github from './Github'

function Navigation() {

  return (
    <div className='Navigation'>
      <Navbar className='Navigation'>
        <Signature />
        <Linkedin />
        <Github />
      </Navbar>
    </div>
  );
}

export default Navigation;
