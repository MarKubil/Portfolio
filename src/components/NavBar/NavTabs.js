import { NavLink } from 'react-router-dom';


function NavTabs() {

    return (
      <nav>
      <ul className="nav nav-pills bg-transparent" style={{fontFamily: "'Fredoka One', cursive", fontSize: "1.5rem"}}>
        <li className="nav-item">
          <NavLink
            to="/"
            end
            className={( { isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
          Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
           Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="blog"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Contacts
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="contact"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            About me
          </NavLink>
        </li>
      </ul>
      </nav>
    );
  }
  
  export default NavTabs;
  