import { NavLink } from 'react-router-dom';


function NavTabs() {
  return (
    <nav>
      <ul className="nav nav-pills bg-transparent" style={{ fontFamily: "'Fredoka One', cursive", fontSize: "1.5rem" }}>
        <li className="nav-item">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="Projects"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="About"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            About me
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="contacts"
            end
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
