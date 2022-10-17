import React, { PureComponent } from "react";
import styles from "./css/Input.module.css";

const Input = (props) => {
  const { placeholder, title, type, defaultvalue, bordercolor, name } = props;

  if (type === "radio") {
    return (
      <div className={styles.inputcontainer}>
        <span className={styles.title}>{title}</span>
        <br></br>
        <input type={type} value={name} className={styles.input} />
        <label for={name}>{name}</label>
      </div>
    );
  }
  return (
    <div className={styles.inputcontainer}>
      <span className={styles.title}>{title}</span>
      <br></br>
      <input
        style={{ width: "16vw" }}
        type={type}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

export default Input;
