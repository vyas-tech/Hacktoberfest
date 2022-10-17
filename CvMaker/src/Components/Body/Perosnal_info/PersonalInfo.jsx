import React, { PureComponent } from "react";
import styles from "./PersonalInfo.module.css";
import boiler from "../Boiler.module.css";
import TitleText from "../Components/TitleText";
import Input from "../Components/InputField";

const PersonalInfo = () => {
  return (
    <div className={`${styles.container} ${boiler.container}`}>
      <TitleText
        title="Fill Section"
        subtitle="Write some dummy text to section with example"
        frametitle="Education"
        icon="yes"
      />
      <div className={styles.textarea}>
        <Input
          type="text"
          placeholder="Enter Your Full Name"
          bordercolor="Blue"
          title="Full Name"
        />
        <form className={styles.form}>
          <Input
            type="radio"
            placeholder="Enter Your Gender here"
            bordercolor="Blue"
            name="Male"
            title="Gender"
          />
          <Input
            type="radio"
            styple={{ padding: "10px 4px" }}
            placeholder="Enter Your Gender here"
            bordercolor="Blue"
            name="Female"
          />
        </form>
        <Input type="date" bordercolor="Blue" title="Date Of Birth" />
        <Input
          type="text"
          placeholder="Enter Your Blood Group"
          bordercolor="Blue"
          title="Blood Group"
        />
        <Input
          type="text"
          placeholder="Enter Your Permanent Address"
          bordercolor="Blue"
          title="Permanent Address"
        />{" "}
        <Input
          type="text"
          placeholder="Enter Your Temporary Address"
          bordercolor="Blue"
          title="Temporary Address"
        
        />
        
      </div>
    </div>
  );
};

export default PersonalInfo;
