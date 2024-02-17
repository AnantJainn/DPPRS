import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./HomedashboardWeb.module.css";

const HomedashboardWeb = () => {
  const navigate = useNavigate();

  const onTrackNowButtonClick = useCallback(() => {
    navigate("/tracknowweb");
  }, [navigate]);

  const onOfficerAnalysisButtonClick = useCallback(() => {
    navigate("/OfficerAnalysisWeb");
  }, [navigate]);

  const onEmerCheckButtonClick = useCallback(() => {
    navigate("/emercheckweb");
  }, [navigate]);

  const onAddProfileButtonClick = useCallback(() => {
    navigate("/AddProfileWeb");
  }, [navigate]);

  const onLogoutButtonClick = useCallback(() => {
    // Please sync "Login-web" to the project
  }, []);

  const onGroupIcon1Click = useCallback(() => {
    navigate("/tracknowweb");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='rectangleRectangle']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.homedashboardWebDiv}>
      <img className={styles.rectangleIcon} alt="" src="../rectangle-33.svg" />
      <div className={styles.rectangleDiv} />
      <img
        className={styles.icons8Analytics301}
        alt=""
        src="../icons8analytics30-1@2x.png"
      />
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <button className={styles.dashboardButton}>Dashboard</button>
      <img
        className={styles.icons8DashboardLayout481}
        alt=""
        src="../icons8dashboardlayout48-1@2x.png"
      />
      <div className={styles.groupDiv}>
        <img className={styles.polygonIcon} alt="" src="../polygon-11.svg" />
        <img className={styles.polygonIcon} alt="" src="../polygon-11.svg" />
        <img className={styles.polygonIcon2} alt="" src="../polygon-31.svg" />
        <img className={styles.polygonIcon3} alt="" src="../polygon-4.svg" />
        <div className={styles.aANKHDiv}>AANKH</div>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-61.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-51.svg" />
      </div>
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-71.svg" />
      <img className={styles.ellipseIcon3} alt="" src="../ellipse-81.svg" />
      <img className={styles.groupIcon} alt="" src="../group-141.svg" />
      <Button
        className={styles.trackNowButton}
        sx={{ width: 134 }}
        variant="text"
        color="secondary"
        href="/tracknowweb"
        onClick={onTrackNowButtonClick}
      >
        Track now
      </Button>
      <img
        className={styles.icons8Dashboard481}
        alt=""
        src="../icons8dashboard48-1@2x.png"
      />
      <Button
        className={styles.officerAnalysisButton}
        sx={{ width: 157 }}
        variant="text"
        color="secondary"
        href="/OfficerAnalysisWeb"
        onClick={onOfficerAnalysisButtonClick}
      >
        Officer Analysis
      </Button>
      <Button
        className={styles.emerCheckButton}
        sx={{ width: 127 }}
        variant="text"
        color="secondary"
        href="/emercheckweb"
        onClick={onEmerCheckButtonClick}
      >
        Emer-Check
      </Button>
      <img
        className={styles.icons8CheckpointGoalFlagFo}
        alt=""
        src="../icons8checkpointgoalflagforprogressandopportunity24-1@2x.png"
      />
      <Button
        className={styles.addProfileButton}
        sx={{ width: 112 }}
        variant="text"
        color="secondary"
        href="/AddProfileWeb"
        onClick={onAddProfileButtonClick}
      >
        Add Profile
      </Button>
      <Button
        className={styles.logoutButton}
        sx={{ width: 71 }}
        variant="text"
        color="secondary"
        href="/loginweb"
        onClick={onLogoutButtonClick}
      >
        Logout
      </Button>
      <img
        className={styles.icons8Profile321}
        alt=""
        src="../icons8profile32-1@2x.png"
      />
      <img className={styles.groupIcon1} alt="" src="../group1.svg" />
      <div className={styles.welcomeGarvDiv}>Welcome Garv,</div>
      <div className={styles.ourMissionIsToAchieveAnE}>
        Our mission is to achieve an environment of professionalism for the
        police force. It will push the police personnel to be accountable which
        will in turn increase their efficiency and decrease the crime rate.
      </div>
      <div className={styles.groupDiv1}>
        <div className={styles.groupDiv2}>
          <img className={styles.lineIcon} alt="" src="../line-111.svg" />
          <div className={styles.groupDiv2}>
            <div className={styles.rectangleDiv4} />
          </div>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.trackNowDiv}>Track Now</div>
        </div>
        <div className={styles.allowYouToTrackAPolicePe}>
          Allow you to track a police personnel to see there current location.
        </div>
        <img
          className={styles.groupIcon2}
          alt=""
          src="../group-24.svg"
          onClick={onGroupIcon1Click}
        />
        <img className={styles.lineIcon1} alt="" src="../line-121.svg" />
        <img className={styles.groupIcon3} alt="" src="../group-23.svg" />
      </div>
      <div className={styles.groupDiv5} onClick={onGroupContainer8Click}>
        <div className={styles.groupDiv2}>
          <img className={styles.lineIcon} alt="" src="../line-112.svg" />
          <div className={styles.groupDiv2}>
            <div
              className={styles.rectangleDiv4}
              data-scroll-to="rectangleRectangle"
            />
          </div>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.addProfileDiv}>Add Profile</div>
        </div>
        <div className={styles.allowYouToTrackAPolicePe}>
          <p className={styles.addOrDelete}>Add or delete profile</p>
          <p className={styles.addOrDelete}>of any police officer for</p>
          <p className={styles.patrolling}>patrolling.</p>
        </div>
        <a href="/AddProfileWeb"><img className={styles.groupIcon4} alt="" src="../group-24.svg"/></a>
        
        <div className={styles.lineDiv} />
        <img className={styles.groupIcon3} alt="" src="../group-231.svg" />
      </div>
      <div className={styles.groupDiv9}>
        <div className={styles.groupDiv2}>
          <img className={styles.lineIcon} alt="" src="../line-112.svg" />
          <div className={styles.groupDiv2}>
            <div className={styles.rectangleDiv4} />
          </div>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.emergencyCheckpointDiv}>
            Emergency checkpoint
          </div>
        </div>
        <div className={styles.immediatelySendsANotificati}>
          Immediately sends a notification to the police personnel in case of
          emergency.
        </div>
        <a href="/EmercheckWeb"><img className={styles.groupIcon5} alt="" src="../group-24.svg"/></a>
        <img className={styles.lineIcon4} alt="" src="../line-122.svg" />
        <img className={styles.groupIcon3} alt="" src="../group-23.svg" />
      </div>
      <div className={styles.groupDiv13}>
        <div className={styles.groupDiv2}>
          <img className={styles.lineIcon} alt="" src="../line-111.svg" />
          <div className={styles.groupDiv2}>
            <div className={styles.rectangleDiv4} />
          </div>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.officerAnalysisDiv}>Officer Analysis</div>
        </div>
        <div className={styles.givesYouAReportOfTheAske}>
          <p className={styles.addOrDelete}>{`Gives you a report of `}</p>
          <p className={styles.patrolling}>
            the asked police offical about there patrolling
          </p>
        </div>
        <a href="/OfficerAnalysisWeb"><img className={styles.groupIcon4} alt="" src="../group-24.svg"/></a>
        <div className={styles.lineDiv1} />
        <img className={styles.groupIcon3} alt="" src="../group-231.svg" />
      </div>
      <img
        className={styles.icons8Logout301}
        alt=""
        src="../icons8logout30-1@2x.png"
      />
    </div>
  );
};

export default HomedashboardWeb;
