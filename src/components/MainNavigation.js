import React from "react";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.logo}>
          <a href="#">Firebase Auth</a>
        </div>
        <ul className={classes.list_items}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Contest</a>
          </li>
          <li className={classes.dropdown_container}>
            <a href="#">User</a>
            <div className={classes.dropdown}>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Log Out</a>
              </li>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MainNavigation;
