import styles from "./Inbox.module.css";
import {
  MdOutlineSelectAll,
  MdRefresh,
  MdMoreVert,
  MdChevronLeft,
  MdChevronRight,
  MdKeyboardAlt,
  MdInbox,
  MdOutlinePersonAddAlt1,
  MdAddShoppingCart,
} from "react-icons/md";
import EmailList from "./EmailList";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";

import { useLoaderData } from "react-router-dom";
const Inbox = () => {
  const data = useLoaderData();
  const dataArr = Object.values(data);
  function onEnd(result) {
    console.log(result);
  }

  return (
    <DragDropContext onDragEnd={onEnd}>
      <div className={styles.inboxContainer}>
        <div className={styles.searchOptions}>
          <div className={styles.selectionBox}>
            <div className={styles.iconBox}>
              <MdOutlineSelectAll className={styles.icon} />
            </div>
            <div className={styles.iconBox}>
              <MdRefresh className={styles.icon} />
            </div>
            <div className={styles.iconBox}>
              <MdMoreVert className={styles.icon} />
            </div>
          </div>

          <div className={styles.aboutBox}>
            <p>1-50 of 340</p>
            <div className={styles.iconBox}>
              <MdChevronLeft className={styles.icon} />
            </div>
            <div className={styles.iconBox}>
              <MdChevronRight className={styles.icon} />
            </div>
            <div className={styles.iconBox}>
              <MdKeyboardAlt className={styles.icon} />
            </div>
          </div>
        </div>

        <div className={styles.inboxFilterBox}>
          <div className={`${styles.inboxFilter} ${styles.inboxFilterActive}`}>
            <MdInbox className={styles.icon} />
            <p>Primary</p>
          </div>

          <div className={styles.inboxFilter}>
            <MdAddShoppingCart className={styles.icon} />
            <p>Promotions</p>
          </div>

          <div className={styles.inboxFilter}>
            <MdOutlinePersonAddAlt1 className={styles.icon} />
            <p>Social</p>
          </div>
        </div>
        <Droppable droppableId="key1">
          {(provided) => (
            <EmailList {...provided.droppableProps} refProp={provided.innerRef}>
              {dataArr.map((email, index) => (
                <ListItem
                  key={index}
                  index={index}
                  task="1"
                  userName={email.userEmail}
                  description={email.description}
                  date={email.date}
                />
              ))}

              {provided.placeholder}
            </EmailList>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default Inbox;

export async function loader({ request, params }) {
  try {
    const response = await fetch(
      "https://clone-ea669-default-rtdb.europe-west1.firebasedatabase.app/emails.json"
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return "error";
  }
}
