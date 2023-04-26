import styles from "./ListItem.module.css";
import {
  MdCheckBoxOutlineBlank,
  MdOutlineStarBorderPurple500,
  MdLabelImportantOutline,
  MdDragIndicator,
  MdStar,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  addToStarred,
  removeFromStarred,
} from "../reduxState/starredState/starredSlice";
import { Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import { Link } from "react-router-dom";
const ListItem = (props) => {
  const newDate = new Date(props.date);
  const newDateString = newDate.toLocaleDateString("en-US");
  const dispatch = useDispatch();
  const [starred, setStarred] = useState(props.starred);
  const [clicked, setClicked] = useState(false);

  function clickedHandler() {
    setClicked(true);
  }

  async function starredHandler() {
    // IF ITEM NOT STARRED WE PUSH ITEM TO DB
    if (!starred) {
      dispatch(
        addToStarred({
          userName: props.userName,
          description: props.description,
          date: props.date,
          starred: true,
          id: props.id,
        })
      );

      setStarred(true);
      return;
    }

    // REMOVE ITEM FROM STARRED
    if (starred) {
      dispatch(removeFromStarred(props.id));

      setStarred(false);
      return;
    }
  }

  // key={index}
  // index={index}
  // task={index.toString()}
  // userName={email.userEmail}
  // description={email.description}
  // date={email.date}
  // starred={email.starred}
  // id={email.id}

  return (
    <Draggable draggableId={props.task} index={props.index}>
      {(provided) => (
        <div
          className={`${styles.listItem} ${
            clicked ? styles.listItemClicked : null
          }`}
          {...provided.draggableProps}
          ref={provided.innerRef}
          onClick={clickedHandler}
        >
          <div className={styles.itemIconBox}>
            <div className={styles.iconBox} {...provided.dragHandleProps}>
              <MdDragIndicator className={styles.icon} />
              <MdCheckBoxOutlineBlank className={styles.icon} />
              <p className={styles.helpText}>Select</p>
            </div>
            <div className={styles.iconBox} onClick={starredHandler}>
              {!starred && (
                <MdOutlineStarBorderPurple500 className={styles.icon} />
              )}
              {starred && (
                <MdStar className={`${styles.icon} ${styles.starredIcon}`} />
              )}
              <p className={styles.helpText}>{`${
                starred ? "Starred" : "Not starred"
              }`}</p>
            </div>
            <div className={styles.iconBox}>
              <MdLabelImportantOutline className={styles.icon} />
              <p className={`${styles.helpText} ${styles.helpTextBig}`}>
                Click to teach Gmail that this conversation is important
              </p>
            </div>

            {props.draft && (
              <div className={`${styles.iconBox} ${styles.draft}`}>Draft</div>
            )}

            {/* <p className={styles.senderText}>{props.userName}</p> */}
          </div>
          <Link to={`/${props.id}`}>
            <div className={styles.itemTitleBox}>
              <p>{props.description}</p>
            </div>
          </Link>
          <p className={styles.itemDate}>{newDateString}</p>
        </div>
      )}
    </Draggable>
  );
};

export default ListItem;
