import { NavLink } from "react-router-dom";
import './MainNav.css'

function MainNav() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/listPage">List Items</NavLink>
            </li>
            <li>
              <NavLink to="/addPage">Add Item</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainNav;
