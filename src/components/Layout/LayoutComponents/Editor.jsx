import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from "./Editor.module.css";
import { MdClose } from "react-icons/md";
const EditorComponent = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  function editorHandler(editorState) {
    setEditorState(editorState);
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(editorState);
  }
  return (
    <div
      className={`${styles.editorContainer} ${
        props.shown ? styles.editorShown : null
      }`}
      onSubmit={submitHandler}
    >
      <form className={styles.emailForm}>
        <div className={styles.inputContainer}>
          <input type="email" id="to" placeholder="To" required />
        </div>

        <div className={styles.inputContainer}>
          <input type="text" id="subject" placeholder="Subject" required />
        </div>

        <Editor
          editorState={editorState}
          toolbarClassName={styles.toolbarStyle}
          wrapperClassName={styles.wrapperStyle}
          editorClassName={styles.editorStyle}
          onEditorStateChange={editorHandler}
          toolbar={{
            options: [
              "inline",
              "blockType",
              "fontSize",
              "textAlign",
              "embedded",
              ,
            ],
            inline: {
              inDropdown: true,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ["bold", "italic", "underline"],
            },
            textAlign: {
              inDropdown: true,
            },
          }}
        />

        <div className={styles.buttonContainer}>
          <button className={styles.sendButton}>
            Send
            <p className={styles.helpText}>Send email</p>
          </button>
          <div className={styles.buttonClose} onClick={() => props.hide()}>
            <MdClose className={styles.icon} />
            <p className={styles.helpText}>Close editor</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditorComponent;
