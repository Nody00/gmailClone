import styles from "./LayoutLeft.module.css";
import { NavLink } from "react-router-dom";
import {
  MdOutlineMode,
  MdInbox,
  MdOutlineStar,
  MdOutlineWatchLater,
  MdSend,
  MdDrafts,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdLabelImportantOutline,
  MdOutlineChat,
  MdOutlineScheduleSend,
  MdOutlineMail,
  MdOutlineErrorOutline,
  MdOutlineDeleteOutline,
} from "react-icons/md";

import { useState } from "react";
const LayoutLeftMenu = (props) => {
  const [moreItems, setMoreItems] = useState(false);
  return (
    <div className={styles.menuLeftContainer}>
      <button className={styles.btnCompose} onClick={() => props.showEditor()}>
        <MdOutlineMode className={styles.composeIcon} />
        {props.isWide && <p>Compose</p>}
        <p className={styles.helpText}>Compose</p>
      </button>

      <nav className={styles.inboxNav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : null)}
          end
        >
          <div className={styles.inboxItem}>
            <div className={styles.extraBox}>
              <MdInbox className={styles.inboxIcon} />
              <p className={styles.itemText}>{props.isWide ? "Inbox" : ""}</p>
            </div>
            <p className={styles.itemNumber}>{props.isWide ? 644 : ""}</p>
            <p className={styles.helpText}>Inbox</p>
          </div>
        </NavLink>

        <NavLink
          to="/starred"
          className={({ isActive }) => (isActive ? styles.active : null)}
          end
        >
          <div className={styles.inboxItem}>
            <div className={styles.extraBox}>
              <MdOutlineStar className={styles.inboxIcon} />
              <p className={styles.itemText}>{props.isWide ? "Starred" : ""}</p>
            </div>
            <p className={styles.itemNumber}></p>
            <p className={styles.helpText}>Starred</p>
          </div>
        </NavLink>

        <NavLink
          to="/snoozed"
          className={({ isActive }) => (isActive ? styles.active : null)}
          end
        >
          <div className={styles.inboxItem}>
            <div className={styles.extraBox}>
              <MdOutlineWatchLater className={styles.inboxIcon} />
              <p className={styles.itemText}>{props.isWide ? "Snoozed" : ""}</p>
            </div>
            <p className={styles.itemNumber}></p>
            <p className={styles.helpText}>Snoozed</p>
          </div>
        </NavLink>

        <NavLink
          to="/sent"
          className={({ isActive }) => (isActive ? styles.active : null)}
          end
        >
          <div className={styles.inboxItem}>
            <div className={styles.extraBox}>
              <MdSend className={styles.inboxIcon} />
              <p className={styles.itemText}>{props.isWide ? "Sent" : ""}</p>
            </div>
            <p className={styles.itemNumber}></p>
            <p className={styles.helpText}>Sent</p>
          </div>
        </NavLink>

        <NavLink
          to="/drafts"
          className={({ isActive }) => (isActive ? styles.active : null)}
          end
        >
          <div className={styles.inboxItem}>
            <div className={styles.extraBox}>
              <MdDrafts className={styles.inboxIcon} />
              <p className={styles.itemText}>{props.isWide ? "Drafts" : ""}</p>
            </div>
            <p className={styles.itemNumber}></p>
            <p className={styles.helpText}>Drafts</p>
          </div>
        </NavLink>

        <div
          className={styles.inboxItem}
          onClick={() => setMoreItems((prevState) => !prevState)}
        >
          <div className={styles.extraBox}>
            {!moreItems && <MdKeyboardArrowDown className={styles.inboxIcon} />}
            {moreItems && <MdKeyboardArrowUp className={styles.inboxIcon} />}

            <p className={styles.itemText}>
              {props.isWide ? (moreItems ? "Less" : "More") : ""}
            </p>
          </div>
          <p className={styles.itemNumber}></p>
        </div>

        {moreItems && (
          <div className={styles.moreItemsContainer}>
            <NavLink
              to="/important"
              className={({ isActive }) => (isActive ? styles.active : null)}
              end
            >
              <div className={styles.inboxItem}>
                <div className={styles.extraBox}>
                  <MdLabelImportantOutline className={styles.inboxIcon} />
                  <p className={styles.itemText}>
                    {props.isWide ? "Important" : ""}
                  </p>
                </div>
                <p className={styles.itemNumber}></p>
                <p className={styles.helpText}>Important</p>
              </div>
            </NavLink>

            <NavLink
              to="/chats"
              className={({ isActive }) => (isActive ? styles.active : null)}
              end
            >
              <div className={styles.inboxItem}>
                <div className={styles.extraBox}>
                  <MdOutlineChat className={styles.inboxIcon} />
                  <p className={styles.itemText}>
                    {props.isWide ? "Chats" : ""}
                  </p>
                </div>
                <p className={styles.itemNumber}></p>
                <p className={styles.helpText}>Chats</p>
              </div>
            </NavLink>

            <NavLink
              to="/scheduled"
              className={({ isActive }) => (isActive ? styles.active : null)}
              end
            >
              <div className={styles.inboxItem}>
                <div className={styles.extraBox}>
                  <MdOutlineScheduleSend className={styles.inboxIcon} />
                  <p className={styles.itemText}>
                    {props.isWide ? "Scheduled" : ""}
                  </p>
                </div>
                <p className={styles.itemNumber}></p>
                <p className={styles.helpText}>Scheduled</p>
              </div>
            </NavLink>

            <NavLink
              to="/all-mail"
              className={({ isActive }) => (isActive ? styles.active : null)}
              end
            >
              <div className={styles.inboxItem}>
                <div className={styles.extraBox}>
                  <MdOutlineMail className={styles.inboxIcon} />
                  <p className={styles.itemText}>
                    {props.isWide ? "All mail" : ""}
                  </p>
                </div>
                <p className={styles.itemNumber}></p>
                <p className={styles.helpText}>All mail</p>
              </div>
            </NavLink>

            <NavLink
              to="/spam"
              className={({ isActive }) => (isActive ? styles.active : null)}
              end
            >
              <div className={styles.inboxItem}>
                <div className={styles.extraBox}>
                  <MdOutlineErrorOutline className={styles.inboxIcon} />
                  <p className={styles.itemText}>
                    {props.isWide ? "Spam" : ""}
                  </p>
                </div>
                <p className={styles.itemNumber}></p>
                <p className={styles.helpText}>Spam</p>
              </div>
            </NavLink>

            <NavLink
              to="/bin"
              className={({ isActive }) => (isActive ? styles.active : null)}
              end
            >
              <div className={styles.inboxItem}>
                <div className={styles.extraBox}>
                  <MdOutlineDeleteOutline className={styles.inboxIcon} />
                  <p className={styles.itemText}>{props.isWide ? "Bin" : ""}</p>
                </div>
                <p className={styles.itemNumber}></p>
                <p className={styles.helpText}>Bin</p>
              </div>
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default LayoutLeftMenu;
