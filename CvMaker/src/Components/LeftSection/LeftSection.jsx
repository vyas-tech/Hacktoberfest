import React from "react";
import {
  FaUserSecret,
  FaGlobeAmericas,
  FaGraduationCap,
  FaRegIdBadge,
} from "react-icons/fa";
import { GiPapers } from "react-icons/gi";
import { MdWorkOutline, MdComputer } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import styles from "./LeftSection.module.css";
import { Button } from "../button/buttons";
import { Link } from "react-router-dom";
import TitleText from "../Body/Components/TitleText";

const icons = {
  profile: FaUserSecret,
  summary: GiPapers,
  work: MdWorkOutline,
  education: BsBook,
  language: FaGlobeAmericas,
  experties: FaRegIdBadge,
  cources: FaGraduationCap,
  computer: MdComputer,
};

const FillSection = (props) => {
  const { icon, text, link } = props;
  const Icons = icons[icon];

  return (
    <li className={styles.fillitems}>
      <Link className={styles.a} to={link}>
        <Icons className={styles.fillicon} />
        <p className={styles.itemstext}>{text}</p>
      </Link>
    </li>
  );
};

const LeftSection = () => {
  return (
    <div className={styles.body}>
      <TitleText
        title="Fill Section"
        subtitle="Write some dummy text to section with example"
      />
      <div className="icons">
        <ul>
          <FillSection icon="profile" text="Personal Info " link="/" />
          <hr />
          <FillSection icon="summary" text="Summary" link="/summary" />
          <FillSection
            icon="work"
            text="Work Experience "
            link="/workexperience"
          />
          <hr />
          <FillSection icon="education" text="Education " link="/education" />
          <FillSection icon="language" text="language" link="/language" />
          <FillSection
            icon="experties"
            text="Areas Of Experties"
            link="/areaofexperties"
          />
          <FillSection icon="cources" text="Courses" link="/cources" />
          <hr />
          <FillSection
            icon="computer"
            text="Computer Skills "
            link="/computerskills"
          />
        </ul>
      </div>
      <div className={styles.buttoncontainer}>
        <Button text="New Section" link="#" />
      </div>
    </div>
  );
};

export default LeftSection;
