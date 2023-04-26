import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";

import { useLoaderData } from "react-router-dom";
import styles from "./Starred.module.css";
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
import { useSelector } from "react-redux";
const Starred = () => {
  const dataArr = useSelector((state) => state.starred.starredArr);

  function onEnd(result) {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const movedEmail = dataArr[source.index];
    dataArr.splice(source.index, 1);

    dataArr.splice(destination.index, 0, movedEmail);

    dataArr.join();
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

        {dataArr.length === 0 && (
          <div className={styles.getStarted}>
            No starred messages. Stars let you give messages a special status to
            make them easier to find. To star a message, click on the star
            outline beside any message or conversation.
          </div>
        )}

        <Droppable droppableId="key1">
          {(provided) => (
            <EmailList {...provided.droppableProps} refProp={provided.innerRef}>
              {dataArr.map((email, index) => (
                <ListItem
                  key={index}
                  index={index}
                  task={index.toString()}
                  userName={email.userName}
                  description={email.description}
                  date={email.date}
                  starred={email.starred}
                  id={email.id}
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

export default Starred;
