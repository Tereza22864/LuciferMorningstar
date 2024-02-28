import { NavLink } from "react-router-dom"
import './Navbar.css'


const Navbar = () => {
    return (
        <header>
         <nav>
           <NavLink 
             to="/" 
             className={ ({isActive}) => 
               isActive ? 'activeLink' : 'nonactiveLink'
             }
            >
             Lucifer Morningstar
          </NavLink>
          <br />
          <NavLink
            to="/QRCode"
            className={({ isActive }) =>
              isActive ? 'activeLink' : 'nonactiveLink'
            }
          >
            QRCode
          </NavLink>
          <br />
        </nav>
    </header>
    );
};
  
  export default Navbar