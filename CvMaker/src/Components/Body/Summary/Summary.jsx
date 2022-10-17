import React, { useState, useEffect } from "react";
import styles from "./Summary.module.css";
import boiler from "../Boiler.module.css";
import TitleText from "../Components/TitleText";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const LoadingComponent = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <img
        className={styles.img}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        alt="react logo"
      />
      <span
        style={{
          marginLeft: 20,
        }}
      >
        CK Editor is loading...
      </span>
    </div>
  );
};

const Summary = () => {
  const [loaded, setLoaded] = useState(false);
  function handleOnReady() {
    setLoaded(true);
  }

  useEffect(() => {
    handleOnReady();
  }, []);

  return (
    <div
      style={{ height: "500px" }}
      className={`${styles.container} ${boiler.container}`}
    >
      <TitleText
        title="Summary Section"
        subtitle="Write some dummy text to section with example"
      />
      <div className={styles.textarea}>
        {(loaded && (
          <CKEditor className={styles.ckeditor} editor={ClassicEditor} />
        )) || <LoadingComponent />}
      </div>
    </div>
  );
};

export default Summary;
