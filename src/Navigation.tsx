import Linkedin from "./Linkedin";
import Signature from "./Signature";
import { Navbar, NavItem } from 'reactstrap';
import './Navigation.css';

function Navigation() {

  return (
    <div className='Navigation'>
      <Navbar className='Navigation'>
        <Signature />
        <Linkedin />
      </Navbar>
    </div>
  );
}

export default Navigation;
