import { useCallback } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./TracknowWebMap.module.css";

const TracknowWebMap = () => {
  const navigate = useNavigate();

  const onDashboardButtonClick = useCallback(() => {
    // Please sync "Home/dashboard-web" to the project
  }, []);

  const onEllipseIcon2Click = useCallback(() => {
    // Please sync "Home/dashboard-web" to the project
  }, []);

  const onOfficerAnalysisButtonClick = useCallback(() => {
    navigate("/officer-analysisweb");
  }, [navigate]);

  const onEmerCheckButtonClick = useCallback(() => {
    navigate("/emercheckweb");
  }, [navigate]);

  const onAddProfileButtonClick = useCallback(() => {
    navigate("/add-profileweb");
  }, [navigate]);

  return (
    <div className={styles.tracknowWebDiv}>
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
        <img className={styles.polygonIcon} alt="" src="../polygon-1.svg" />
        <img className={styles.polygonIcon} alt="" src="../polygon-1.svg" />
        <img className={styles.polygonIcon2} alt="" src="../polygon-3.svg" />
        <img className={styles.polygonIcon3} alt="" src="../polygon-4.svg" />
        <div className={styles.aANKHDiv}>AANKH</div>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-6.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-5.svg" />
      </div>
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-7.svg" />
      <img
        className={styles.ellipseIcon3}
        alt=""
        src="../ellipse-8.svg"
        onClick={onEllipseIcon2Click}
      />
      <img className={styles.groupIcon} alt="" src="../group-14.svg" />
      <div className={styles.trackNowDiv}>Track now</div>
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
        href="/officer-analysisweb"
        onClick={onOfficerAnalysisButtonClick}
      >
        Officer Analysis
      </Button>
      <Button
        className={styles.emerCheckButton}
        sx={{ width: 131 }}
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
        href="/add-profileweb"
        onClick={onAddProfileButtonClick}
      >
        Add Profile
      </Button>
      <img
        className={styles.icons8Profile321}
        alt=""
        src="../icons8profile32-1@2x.png"
      />
      <img className={styles.groupIcon1} alt="" src="../group.svg" />
      <img className={styles.lineIcon} alt="" src="../line-12.svg" />
      <img className={styles.rectangleIcon} alt="" src="../rectangle-34.svg" />
      <img className={styles.lineIcon1} alt="" src="../line-11.svg" />
      <div className={styles.groupDiv1}>
        <div className={styles.rectangleDiv4} />
      </div>
      <div className={styles.groupDiv2}>
        <div className={styles.rectangleDiv5} />
      </div>
      <div className={styles.rectangleDiv6} />
      <div className={styles.trackNowDiv1}>Track Now</div>
      <div className={styles.groupDiv3}>
        <div className={styles.rectangleDiv7} />
        <img
          className={styles.mapsicleMapIcon}
          alt=""
          src="../mapsicle-map@2x.png"
        />
        <div className={styles.groupDiv4}>
          <div className={styles.rectangleDiv8} />
          <img
            className={styles.icons8PlusMath241}
            alt=""
            src="../icons8plusmath24-1@2x.png"
          />
          <img
            className={styles.icons8Minus241}
            alt=""
            src="../icons8minus24-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.groupDiv5}>
        <img
          className={styles.policeCar1Icon}
          alt=""
          src="../policecar-1@2x.png"
        />
        <img className={styles.lineIcon2} alt="" src="../line-13.svg" />
        <img className={styles.lineIcon3} alt="" src="../line-14.svg" />
        <img className={styles.lineIcon4} alt="" src="../line-15.svg" />
        <img className={styles.ellipseIcon4} alt="" src="../ellipse-11.svg" />
        <TextField
          className={styles.sTextField}
          sx={{ width: 3 }}
          color="secondary"
          variant="filled"
          multiline
          label="S"
          margin="none"
        />
      </div>
      <div className={styles.rectangleDiv9} />
      <img
        className={styles.placeholder1Icon}
        alt=""
        src="../placeholder-1@2x.png"
      />
      <div className={styles.bhaijipuraPDPURoad}>
        191, Bhaijipura, PDPU Road
      </div>
      <div className={styles.pratikMallSargasanSquare}>
        Pratik Mall, Sargasan square
      </div>
      <div className={styles.distanceCovernedTillNow}>
        Distance coverned till now
      </div>
      <div className={styles.numberOfStopage}>Number of stopage</div>
      <div className={styles.totalDurationDiv}>Total Duration</div>
      <div className={styles.missedVerificationDiv}>Missed Verification</div>
      <img className={styles.ellipseIcon5} alt="" src="../ellipse-12.svg" />
      <div className={styles.sDiv}>S</div>
      <div className={styles.rectangleDiv10} />
      <div className={styles.rectangleDiv11} />
      <div className={styles.rectangleDiv12} />
      <div className={styles.rectangleDiv13} />
      <div className={styles.kmDiv}>26 Km</div>
      <div className={styles.div}>03</div>
      <div className={styles.noDiv}>No</div>
      <div className={styles.minsDiv}>59mins</div>
      <div className={styles.rectangleDiv14} />
      <img
        className={styles.placeholder1Icon1}
        alt=""
        src="../placeholder-11@2x.png"
      />
      <div className={styles.bhaijipuraPDPURoad1}>
        191, Bhaijipura, PDPU Road
      </div>
    </div>
  );
};

export default TracknowWebMap;
