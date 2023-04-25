import styles from "./EmailList.module.css";

import ListItem from "./ListItem";
const EmailList = (props) => {
  return (
    <div className={styles.emailList} ref={props.refProp}>
      {props.children}
    </div>
  );
};

export default EmailList;
