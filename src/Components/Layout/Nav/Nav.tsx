import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const contentClassname = isNavExpanded
    ? `${classes[""]}`
    : classes.collapsible;

  return (
    <div className={classes.parent}>
      <nav className={classes.nav}>
        <div className={classes.logo} data-aos="zoom-in">
          Em Stuart Injuries Clinic
        </div>

        <button
          className={`${classes.navbutton}`}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <FaBars className={classes.toggler} />
        </button>

        <ul className={`${contentClassname}`}>
          <li>
            <NavLink to="/home" activeClassName={classes.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName={classes.active}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/treatments"
              activeClassName={classes.active}
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/blog" activeClassName={classes.active}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName={classes.active}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
