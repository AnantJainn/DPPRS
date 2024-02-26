import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./intro.module.css";
import OfficersTable from "../components/OfficersTable";
const Intro = () => {
  const navigate = useNavigate();
  const onFIRAnalysis = useCallback(() => {
    navigate("/firanalysis");
  }, [navigate]);
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

  const onDashboardButtonClick = useCallback(() => {
    // Please sync "Home/dashboard-web" to the project
  }, []);

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
      <div className={styles.rectangleDiv} />
      <img
        className={styles.icons8Analytics301}
        alt=""
        src="../icons8analytics30-1@2x.png"
      />
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <Button
        className={styles.dashboardButton}
        sx={{ width: 119 }}
        variant="text"
        color="secondary"
        href="/homedashboardweb"
        onClick={onDashboardButtonClick}
      >
        Dashboard
      </Button>
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
        className={styles.firAnalysisButton}
        sx={{ width: 167 }}
        variant="text"
        color="secondary"
        href="/firanalysis"
        onClick={onFIRAnalysis}
      >
        FIR Analysis
      </Button>
      <img className={styles.icons81Profile321} alt="" src="../fir3.png" />
      {/* <Button
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
      /> */}
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
      <div>
      <img
        className={styles.groupIcon31}
        alt=""
        src="../Delhi_Police_Logo.png"
      />
        <img
          src="../GGSIU_logo.png"
          alt="USAR Logo"
          style={{
            maxWidth: "150px",
            // marginBottom: "20px",
            marginRight: "800px",
            marginTop: "27.4px",
          }}
        />
        <h1
          style={{
            fontSize: "36px",
            marginTop: "110px",
            color: "black",
            marginRight: "850px",
          }}
        >
          Welcome to the Delhi Police Patrolling Dashboard
        </h1>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            color: "black",
            marginRight: "300px",
            textAlign: "center",
          }}
        >
          This dashboard is designed to enhance safety and security through
          advanced analytics and efficient reporting. <br />
          Developed by Gauranshi Gupta and Anant Jain from GGSIPU, Delhi.
        </p>
        <img
          src="path_to_your_image"
          alt="Creators Photo"
          style={{ maxWidth: "300px", marginTop: "20px" }}
        />
      </div>
    </div>
  );
};

export default Intro;
