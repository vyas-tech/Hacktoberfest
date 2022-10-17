import React from "react";
import { FaUserSecret } from "react-icons/fa";
import styles from "../LeftSection/LeftSection.module.css";

const icons = {
  plus: FaUserSecret,
};

export const Button = (props) => {
  const { icon, text, link } = props;
  const Icons = icons[icon || "plus"];
  return (
    <a href={link}>
      <button className={styles.button} href={link}>
        <Icons className={styles.buttonIcons} />
        {text}
      </button>
    </a>
  );
};
