import styles from "./ListItem.module.css";
import {
  MdCheckBoxOutlineBlank,
  MdOutlineStarBorderPurple500,
  MdLabelImportantOutline,
  MdDragIndicator,
} from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";
const ListItem = (props) => {
  return (
    <Draggable draggableId={props.task} index={props.index}>
      {(provided) => (
        <div
          className={styles.listItem}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className={styles.itemIconBox}>
            <div className={styles.iconBox} {...provided.dragHandleProps}>
              <MdDragIndicator className={styles.icon} />
              <MdCheckBoxOutlineBlank className={styles.icon} />
            </div>
            <div className={styles.iconBox}>
              <MdOutlineStarBorderPurple500 className={styles.icon} />
            </div>
            <div className={styles.iconBox}>
              <MdLabelImportantOutline className={styles.icon} />
            </div>
            <p className={styles.senderText}>{props.userName}</p>
          </div>
          <div className={styles.itemTitleBox}>
            <p>{props.description}</p>
          </div>
          <p className={styles.itemDate}>{props.date}</p>
        </div>
      )}
    </Draggable>
  );
};

export default ListItem;
