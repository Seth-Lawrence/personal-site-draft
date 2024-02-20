import Linkedin from "./Linkedin";
import Signature from "./Signature";
import { Navbar, NavItem, NavLink } from 'reactstrap';
import './Navigation.css';
import Github from './Github'

function Navigation({ redirect }: {redirect: Function}) {

  return (
    <div className='Navigation'>
      <Navbar className='Navigation'>
        <Signature />
        <NavLink><Linkedin redirect={redirect} /></NavLink>
        <NavLink><Github redirect={redirect} /></NavLink>
      </Navbar>
    </div>
  );
}

export default Navigation;
