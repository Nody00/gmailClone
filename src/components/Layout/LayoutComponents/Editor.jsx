import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from "./Editor.module.css";
import { MdClose } from "react-icons/md";
import { useRef } from "react";
import { useSubmit } from "react-router-dom";
import { EditorState, ContentState } from "draft-js";
const EditorComponent = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const recipientInputRef = useRef();
  const subjectInputRef = useRef();
  const submit = useSubmit();
  function editorHandler(editorState) {
    setEditorState(editorState);
  }

  function resetError() {
    setErrorState(false);
    setErrorMessage("");
  }

  async function submitHandler(e) {
    e.preventDefault();

    const recipient = recipientInputRef.current.value;
    const subject = subjectInputRef.current.value;
    const emailText = editorState.getCurrentContent().getPlainText();

    // validation
    if (
      !recipient.includes("@") ||
      recipient.length === 0 ||
      subject.length === 0 ||
      emailText.length === 0
    ) {
      setErrorState(true);
      setErrorMessage("Please fill out the required fields!");
      return;
    }
    //

    const newMailData = {
      userEmail: recipient,
      subject: subject,
      description: emailText,
      date: new Date(),
    };

    const response = await fetch(
      "https://clone-ea669-default-rtdb.europe-west1.firebasedatabase.app/sentEmails.json",
      {
        method: "POST",
        body: JSON.stringify(newMailData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      setErrorState(true);
      setErrorMessage("Request error,please reload and try again");
      return;
    }

    recipientInputRef.current.value = "";
    subjectInputRef.current.value = "";
    setEditorState("");
  }
  return (
    <div
      className={`${styles.editorContainer} ${
        props.shown ? styles.editorShown : null
      }`}
    >
      <form className={styles.emailForm} onSubmit={submitHandler}>
        <div className={styles.inputContainer}>
          <input
            type="email"
            id="to"
            placeholder="To"
            required
            ref={recipientInputRef}
            className={`${errorState ? styles.errorBtn : null}`}
            onChange={resetError}
          />
        </div>

        <div className={styles.inputContainer}>
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            required
            ref={subjectInputRef}
            className={`${errorState ? styles.errorBtn : null}`}
            onChange={resetError}
          />
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
          <button
            className={`${styles.sendButton} ${
              errorState ? styles.errorBtn : null
            }`}
          >
            {errorState ? "Error" : "Send"}
            <p className={styles.helpText}>Send email</p>
          </button>
          {errorState && <p className={styles.error}>{errorMessage}</p>}
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
