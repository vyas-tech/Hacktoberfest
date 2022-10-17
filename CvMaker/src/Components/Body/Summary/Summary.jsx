import React, { useState, useEffect } from "react";
import styles from "./Summary.module.css";
import boiler from "../Boiler.module.css";
import TitleText from "../Components/TitleText";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Summary = () => {
  const [loaded, setloaded] = useState(false);
  useEffect(() => {
    setloaded(true);
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
          <CKEditor
            className={styles.ckeditor}
            editor={ClassicEditor}
            data="<p>Welcome to my react Learning</p>"
          />
        )) || <img
        className={styles.img}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        height="100em"
        alt="react logo"
      />}
      </div>
    </div>
  );
};

export default Summary;
