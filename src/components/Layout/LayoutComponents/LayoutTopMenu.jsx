import styles from "./LayoutTopMenu.module.css";
import gmailImage from "../../../assets/gmail.png";
import {
  MdMenu,
  MdSearch,
  MdClose,
  MdQuestionMark,
  MdSettings,
  MdOutlineApps,
  MdPersonOutline,
  MdEmail,
} from "react-icons/md";
import { IoOptions } from "react-icons/io5";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
const LayoutTopMenu = (props) => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [showClear, setShowClear] = useState(false);
  const [helpMenu, setHelpMenu] = useState(false);
  const searchInputRef = useRef();

  function toggleMenu() {
    props.toggle();
  }

  function showClearHandler(e) {
    if (e.target.value !== "") {
      setShowClear(true);
      return;
    }
    setShowClear(false);
  }

  function clearInputHandler() {
    searchInputRef.current.value = "";
    setShowClear(false);
  }

  function searchFocusHandler() {
    setSearchFocus(true);
  }

  function focusBlurHandler() {
    setSearchFocus(false);
  }

  function showHelpMenu() {
    setHelpMenu((prevState) => !prevState);
  }

  return (
    <div className={styles.menuTop}>
      <div className={styles.logoContainer}>
        <div className={styles.iconBox} onClick={toggleMenu}>
          <MdMenu className={styles.icon} />
          <p className={styles.toolTip}>Main menu</p>
        </div>
        <Link to="/">
          <img src={gmailImage} alt="" className={styles.logoImage} />
        </Link>
      </div>

      <div
        className={`${styles.searchBarContainer} ${
          searchFocus ? styles.searchBarContainerFocus : null
        }`}
      >
        <div className={styles.searchBarIconBox}>
          <MdSearch className={styles.searchBarIcon} />
          <p className={styles.toolTip}>Search</p>
        </div>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search mail"
          onFocus={searchFocusHandler}
          onBlur={focusBlurHandler}
          onChange={showClearHandler}
          ref={searchInputRef}
        />
        <div
          className={`${styles.searchBarIconBox} ${
            showClear ? null : styles.Close
          }`}
          onClick={clearInputHandler}
        >
          <MdClose className={styles.searchBarIcon} />
          <p className={styles.toolTip}>Clear search</p>
        </div>
        <div className={styles.searchBarIconBox}>
          <IoOptions className={styles.searchBarIcon} />
          <p className={styles.toolTip}>Show search options</p>
        </div>
        {searchFocus && (
          <div className={styles.dropdownContainer}>
            <div className={styles.filterSection}>
              <div className={styles.filterItem}>Has attachment</div>
              <div className={styles.filterItem}>Last 7 days</div>
              <div className={styles.filterItem}>From me</div>
            </div>

            <div className={styles.results}>
              <div className={styles.resultItem}>
                <div className={styles.boxOne}>
                  <div className={styles.resultIconBox}>
                    <MdEmail className={styles.resultIcon} />
                  </div>

                  <div className={styles.textBox}>
                    <p className={styles.emailText}>Username Change</p>
                    <p className={styles.recipientText}>John Smith</p>
                  </div>
                </div>

                <div className={styles.dateBox}>
                  <p className={styles.dateText}>02/24/2021</p>
                </div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.boxOne}>
                  <div className={styles.resultIconBox}>
                    <MdEmail className={styles.resultIcon} />
                  </div>

                  <div className={styles.textBox}>
                    <p className={styles.emailText}>Username Change</p>
                    <p className={styles.recipientText}>John Smith</p>
                  </div>
                </div>

                <div className={styles.dateBox}>
                  <p className={styles.dateText}>02/24/2021</p>
                </div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.boxOne}>
                  <div className={styles.resultIconBox}>
                    <MdEmail className={styles.resultIcon} />
                  </div>

                  <div className={styles.textBox}>
                    <p className={styles.emailText}>Username Change</p>
                    <p className={styles.recipientText}>John Smith</p>
                  </div>
                </div>

                <div className={styles.dateBox}>
                  <p className={styles.dateText}>02/24/2021</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.smallMenuContainer}>
        <button
          className={`${styles.smallMenuBtn} ${
            helpMenu ? styles.hoverSmallMenuBtn : null
          }`}
          onClick={showHelpMenu}
        >
          <MdQuestionMark className={styles.smallMenuIcon} />
          <p className={styles.toolTip}>Help</p>
          {helpMenu && (
            <div className={styles.helpContainer}>
              <p>Help</p>
              <p>Training</p>
              <p>Updates</p>
              <div className={styles.helpContact}>
                <p className={styles.helpItem}>Send feedback to Google</p>
              </div>
            </div>
          )}
        </button>

        <button className={styles.smallMenuBtn}>
          <MdSettings className={styles.smallMenuIcon} />
          <p className={styles.toolTip}>Settings</p>
        </button>

        <button className={styles.smallMenuBtn}>
          <MdOutlineApps className={styles.smallMenuIcon} />
          <p className={styles.toolTip}>Google apps</p>
        </button>

        <button className={styles.smallMenuBtn}>
          <MdPersonOutline className={styles.smallMenuIcon} />
          <div className={styles.toolTipProfile}>
            <p>Google Account</p>
            <p>Dino Krcic</p>
            <p>dinokrcicprof@gmail.com</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default LayoutTopMenu;
