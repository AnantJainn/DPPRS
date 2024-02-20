import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./HomedashboardWeb.module.css";
import OfficersTable from "../components/OfficersTable";
const HomedashboardWeb = () => {
  const navigate = useNavigate();

  const onTrackNowButtonClick = useCallback(() => {
    navigate("/Report");
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
    navigate("/report");
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
      {/* <img className={styles.rectangleIcon} alt="" src="../rectangle-33.svg" /> */}
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
        <img
          className={styles.polygonIcon}
          alt=""
          src="../Pol-removebg-preview.png"
        />
      </div>
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-71.svg" />
      <img className={styles.ellipseIcon3} alt="" src="../ellipse-81.svg" />
      <img className={styles.groupIcon} alt="" src="../group-141.svg" />
      <Button
        className={styles.trackNowButton}
        sx={{ width: 180 }}
        variant="text"
        color="secondary"
        href="/Report"
        onClick={onTrackNowButtonClick}
      >
        Generate Report
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
      {/* <Button
        className={styles.logoutButton}
        sx={{ width: 71 }}
        variant="text"
        color="secondary"
        href="/loginweb"
        onClick={onLogoutButtonClick}
      >
        Logout
      </Button> */}
      <img
        className={styles.icons8Profile321}
        alt=""
        src="../icons8profile32-1@2x.png"
      />
      <img
        className={styles.groupIcon1}
        alt=""
        src="../Delhi_Police_Logo.png"
      />
      <div className={styles.welcomeGarvDiv}>
        Welcome to Delhi Police Patrolling Service,
      </div>
      <div className={styles.ourMissionIsToAchieveAnE}>
        Our mission is to achieve an environment of professionalism for the
        police force. It will push the police personnel to be accountable which
        will in turn increase their efficiency and decrease the crime rate.
      </div>
      <OfficersTable />
    </div>
  );
};

export default HomedashboardWeb;
