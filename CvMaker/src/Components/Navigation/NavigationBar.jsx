/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */

import React from "react";
import { PropTypes } from "prop-types";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiMedal2Line } from "react-icons/ri";
import { GiUsaFlag } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import styles from "./Navigation.module.css";

const Icons = {
  Dashboard: AiOutlineDashboard,
  Upgrade: RiMedal2Line,
  Language: GiUsaFlag,
  profile: CgProfile,
};

const NavItems = (props) => {
  const { icon, text } = props;
  const Icon = Icons[icon];
  return (
    <li className={styles.li}>
      <Icon className={styles.navIcons} />
      {text}
    </li>
  );
};

NavItems.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const NavigationBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <img
          className={styles.img}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          height="40em"
          alt="react logo"
        />
        <NavItems icon="Dashboard" text="Dashboard" />
        <NavItems icon="Upgrade" text="Upgrade" />
        <NavItems icon="Language" text="English" />
        <NavItems icon="profile" text="Sewak" />
      </ul>
    </nav>
  );
};

export default NavigationBar;
