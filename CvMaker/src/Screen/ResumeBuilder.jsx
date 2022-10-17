import React from "react";
import LeftSection from "../Components/LeftSection/LeftSection";
import NavigationBar from "../Components/Navigation/NavigationBar";
import { Route, Routes, Link } from "react-router-dom";
import PersonalInfo from "../Components/Body/Perosnal_info/PersonalInfo";
import Summary from "../Components/Body/Summary/Summary";
import styles from "./ResumeBuilder.module.css";
import RightSection from "../Components/RightSection/RightSection";

// eslint-disable-next-line react/function-component-definition
const ResumeBuilder = () => {
  return (
    <>
      <NavigationBar />
      <div className={styles.container}>
        <LeftSection />
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
        <RightSection />
      </div>
    </>
  );
};
export default ResumeBuilder;
