import React, { PureComponent } from "react";
import styles from "./RightSection.module.css";
import TitleText from '../Body/Components/TitleText';

const RightSection = () => {
  return (
    <div className={styles.container}>
     <TitleText
        title="Resume Setting"
        subtitle="There are many passages of loream ipsum dummy text available online"
      />
    </div>
  );
};

export default RightSection;
