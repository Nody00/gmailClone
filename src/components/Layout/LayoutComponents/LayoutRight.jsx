import styles from "./LayoutRight.module.css";
import calendar from "../../../assets/calendar.png";
import contacts from "../../../assets/contacts.png";
import keep from "../../../assets/keep.png";
import tasks from "../../../assets/tasks.png";
import { MdOutlineAdd, MdChevronRight, MdChevronLeft } from "react-icons/md";

const LayoutMenuRight = (props) => {
  return (
    <div className={styles.menuRightContainer}>
      <div className={styles.iconsContainer}>
        <div className={styles.imgContainer}>
          <img src={calendar} alt="" className={styles.image} />
          <p className={styles.helpText}>Calendar</p>
        </div>
        <div className={styles.imgContainer}>
          <img src={keep} alt="" className={styles.image} />
          <p className={styles.helpText}>Keep</p>
        </div>
        <div className={styles.imgContainer}>
          <img src={tasks} alt="" className={styles.image} />
          <p className={styles.helpText}>Task</p>
        </div>
        <div className={styles.imgContainer}>
          <img src={contacts} alt="" className={styles.image} />
          <p className={styles.helpText}>Contacts</p>
        </div>
      </div>

      <div className={styles.iconContainer}>
        <MdOutlineAdd className={styles.icon} />
        <p className={styles.helpText}>Get add-ons</p>
      </div>

      <button
        className={`${styles.hideButton} ${
          props.isHidden ? styles.btnHidden : null
        }`}
        onClick={() => props.toggle()}
      >
        <MdChevronRight className={styles.icon} />
      </button>
    </div>
  );
};

export default LayoutMenuRight;
