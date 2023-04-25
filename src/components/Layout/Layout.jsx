import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import LayoutTopMenu from "./LayoutComponents/LayoutTopMenu";
import LayoutLeftMenu from "./LayoutComponents/LayoutLeft";
import LayoutMenuRight from "./LayoutComponents/LayoutRight";
import { useState } from "react";
import EditorComponent from "./LayoutComponents/Editor";
const Layout = () => {
  const [menuWide, setMenuWide] = useState(true);
  const [rightMenuHidden, setRightMenuHidden] = useState(false);
  const [editorShown, setEditorShown] = useState(false);

  function showEditor() {
    setEditorShown(true);
  }

  function hideEditor() {
    setEditorShown(false);
  }

  function toggleMenu() {
    setMenuWide((prevState) => !prevState);
  }

  function setMenuBig() {
    setMenuWide(true);
  }

  function setMenuSmall() {
    setMenuWide(false);
  }

  function toggleRightMenu() {
    setRightMenuHidden((prevState) => !prevState);
  }
  return (
    <div
      className={`${styles.layoutGrid} ${!menuWide ? styles.menuShort : null} ${
        rightMenuHidden ? styles.rightMenuShort : null
      } ${!menuWide && rightMenuHidden ? styles.both : null}`}
    >
      <LayoutLeftMenu
        isWide={menuWide}
        menuWide={setMenuBig}
        menuSmall={setMenuSmall}
        showEditor={showEditor}
      />

      <LayoutTopMenu toggle={toggleMenu} />

      <div className={styles.mainContent}>
        <Outlet />
      </div>

      <LayoutMenuRight isHidden={rightMenuHidden} toggle={toggleRightMenu} />

      <EditorComponent shown={editorShown} hide={hideEditor} />
    </div>
  );
};

export default Layout;
