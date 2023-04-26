import { useLoaderData } from "react-router-dom";
import styles from "./EmailView.module.css";
import {
  MdMoreVert,
  MdChevronLeft,
  MdChevronRight,
  MdKeyboardAlt,
  MdKeyboardBackspace,
  MdOutlineArchive,
  MdOutlineReportGmailerrorred,
  MdDeleteOutline,
  MdOutlineMarkAsUnread,
  MdOutlineWatchLater,
  MdOutlineAddTask,
  MdMoveToInbox,
  MdOutlineLabel,
  MdOutlineClose,
  MdOutlinePrint,
  MdOpenInNew,
  MdStarBorder,
  MdReply,
  MdLabelImportantOutline,
  MdOutlineTurnLeft,
  MdOutlineTurnRight,
  MdStar,
} from "react-icons/md";
import profilePhoto from "../assets/defaultUser.png";
import { Link } from "react-router-dom";
const EmailView = () => {
  const data = useLoaderData();
  const emailData = data[0];
  console.log(emailData);

  return (
    <div className={styles.inboxContainer}>
      <div className={styles.searchOptions}>
        <div className={styles.selectionBox}>
          <Link to="/">
            <div className={styles.iconBox}>
              <MdKeyboardBackspace className={styles.icon} />
              <p className={styles.helpText}>Back to inbox</p>
            </div>
          </Link>
          <div className={styles.iconBox}>
            <MdOutlineArchive className={styles.icon} />
            <p className={styles.helpText}>Archive</p>
          </div>
          <div className={styles.iconBox}>
            <MdOutlineReportGmailerrorred className={styles.icon} />
            <p className={styles.helpText}>Report spam</p>
          </div>
          <div className={styles.iconBox}>
            <MdDeleteOutline className={styles.icon} />
            <p className={styles.helpText}>Delete</p>
          </div>
          <div className={styles.iconBox}>
            <MdOutlineMarkAsUnread className={styles.icon} />
            <p className={styles.helpText}>Mark as unread</p>
          </div>
          <div className={styles.iconBox}>
            <MdOutlineWatchLater className={styles.icon} />
            <p className={styles.helpText}>Snooze</p>
          </div>
          <div className={styles.iconBox}>
            <MdOutlineAddTask className={styles.icon} />
            <p className={styles.helpText}>Add to Tasks</p>
          </div>
          <div className={styles.iconBox}>
            <MdMoveToInbox className={styles.icon} />
            <p className={styles.helpText}>Move to</p>
          </div>
          <div className={styles.iconBox}>
            <MdOutlineLabel className={styles.icon} />
            <p className={styles.helpText}>Labels</p>
          </div>
          <div className={styles.iconBox}>
            <MdMoreVert className={styles.icon} />
            <p className={styles.helpText}>More</p>
          </div>
        </div>

        <div className={styles.aboutBox}>
          <p>1-50 of 340</p>
          <div className={styles.iconBox}>
            <MdChevronLeft className={styles.icon} />
            <p className={styles.helpText}>Newer</p>
          </div>
          <div className={styles.iconBox}>
            <MdChevronRight className={styles.icon} />
            <p className={styles.helpText}>Older</p>
          </div>
          <div className={styles.iconBox}>
            <MdKeyboardAlt className={styles.icon} />
            <p className={styles.helpText}>Input options</p>
          </div>
        </div>
      </div>

      {/* email title content */}

      <div className={styles.emailContainer}>
        <div className={styles.titleBox}>
          <div className={styles.helperBox1}>
            <p className={styles.title}>{emailData.subject}</p>
            <div className={styles.titleIconBox}>
              <MdLabelImportantOutline className={styles.titleIcon} />
              <p className={styles.helpText}>Add to important conversations</p>
            </div>
            <div className={styles.inboxButtonContainer}>
              <div className={styles.inboxButtonPart}>Inbox</div>
              <div className={styles.inboxButtonPart}>
                <MdOutlineClose className={styles.titleIconSmall} />
              </div>
            </div>
          </div>

          <div className={styles.titleRightIcons}>
            <div className={styles.titleIconBox}>
              <MdOutlinePrint className={styles.icon} />
              <p className={styles.helpText}>Print</p>
            </div>
            <div className={styles.titleIconBox}>
              <MdOpenInNew className={styles.icon} />
              <p className={styles.helpText}>In new window</p>
            </div>
          </div>
        </div>

        {/* email main content */}

        <div className={styles.profileImageBox}>
          <img src={profilePhoto} alt="" className={styles.profileImage} />
        </div>

        <div className={styles.emailMain}>
          <div className={styles.emailGridSmall}>
            <div className={styles.upperRow}>
              <div className={styles.emailBox}>
                <p className={styles.email}>{`<${emailData.userEmail}>`}</p>
                <p className={styles.unsubscribe}>Unsubscribe</p>
              </div>

              <div className={styles.dateBtnBox}>
                <p className={styles.date}>{emailData.date}</p>
                <div className={styles.titleIconBox}>
                  {!emailData.starred && (
                    <MdStarBorder className={styles.iconSmall} />
                  )}
                  {emailData.starred && (
                    <MdStar
                      className={`${styles.icon} ${styles.starredIcon}`}
                    />
                  )}
                  <p className={styles.helpText}>Favourite</p>
                </div>
                <div className={styles.titleIconBox}>
                  <MdReply className={styles.icon} />
                  <p className={styles.helpText}>Reply</p>
                </div>
                <div className={styles.titleIconBox}>
                  <MdMoreVert className={styles.iconSmall} />
                  <p className={styles.helpText}>More</p>
                </div>
              </div>
            </div>
            <div className={styles.downRow}>
              <p>to me</p>
            </div>
          </div>

          <div className={styles.emailDesc}>
            <p>{emailData.description}</p>
          </div>
        </div>

        <div className={styles.emailEndButtonContainer}>
          <div className={styles.emailBtn}>
            <MdOutlineTurnLeft className={styles.endIcon} />
            <p>Reply</p>
          </div>
          <div className={styles.emailBtn}>
            <MdOutlineTurnRight className={styles.endIcon} />
            <p>Forward</p>
          </div>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default EmailView;

export async function loader({ request, params }) {
  try {
    const sentResponse = await fetch(
      "https://clone-ea669-default-rtdb.europe-west1.firebasedatabase.app/sentEmails.json"
    );
    const emailsResponse = await fetch(
      "https://clone-ea669-default-rtdb.europe-west1.firebasedatabase.app/emails.json"
    );
    const draftsResponse = await fetch(
      "https://clone-ea669-default-rtdb.europe-west1.firebasedatabase.app/drafts.json"
    );

    const sentEmails = await sentResponse.json();
    const emailsEmails = await emailsResponse.json();
    const draftsEmails = await draftsResponse.json();

    const emailData = [
      ...Object.values(sentEmails),
      ...Object.values(emailsEmails),
      ...Object.values(draftsEmails),
    ];

    const email = emailData.filter((email) => email.id === params.emailId);

    return email;
  } catch (error) {
    console.error(error);
    return "error";
  }
}
