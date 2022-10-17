import React, { PureComponent } from "react";
import { MdLibraryAdd } from "react-icons/md";

const TitleText = (props) => {
  const { title, subtitle } = props;
  const Icon = MdLibraryAdd;
  return (
    <>
      <div className="heading">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </>
  );
};

export default TitleText;
