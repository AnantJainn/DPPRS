import React, { useCallback, useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./OfficerAnalysisWeb.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import PopupTable from "../components/PopupTable";
const OfficerAnalysisWeb = () => {
  const navigate = useNavigate();
  const [reports, setReports] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [name, setFname] = useState("");
  const [ID, setID] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  const onTrackNowButtonClick = useCallback(() => {
    navigate("/tracknowweb");
  }, [navigate]);
  const onDashboardButtonClick = useCallback(() => {
    // Please sync "Home/dashboard-web" to the project
  }, []);

  const onEmerCheckButtonClick = useCallback(() => {
    navigate("/emercheckweb");
  }, [navigate]);
  const onEllipseIcon2Click = useCallback(() => {
    navigate("/OfficerAnalysisWeb");
  }, [navigate]);
  const onAddProfileButtonClick = useCallback(() => {
    navigate("/AddProfileWeb");
  }, [navigate]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    const reportsCollection = collection(db, "Reports");
    const snapshot = await getDocs(reportsCollection);
    const reportData = snapshot.docs.map((doc) => ({
      ID: doc.id,
      ...doc.data(),
    }));
    setReports(reportData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && ID) {
      const filtered = reports.filter(
        (report) => report.name === name && report.ID === ID
      );
      setFilteredReports(filtered);
      setShowPopup(true); // Show popup after setting filtered reports
    } else {
      // If name or ID is empty, reset filteredReports to all reports
      setFilteredReports(reports);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.officerAnalysisWebDiv}>
      <div className={styles.rectangleDiv} />
      <img
        className={styles.icons8Analytics301}
        alt=""
        src="../icons8analytics30-1@2x.png"
      />{" "}
      <div className={styles.rectangleDiv1} />{" "}
      <div className={styles.rectangleDiv2} />{" "}
      <div className={styles.rectangleDiv3} />{" "}
      <Button
        className={styles.dashboardButton}
        sx={{ width: 119 }}
        variant="text"
        color="secondary"
        href="/homedashboardweb"
        onClick={onDashboardButtonClick}
      >
        {" "}
        Dashboard{" "}
      </Button>{" "}
      <img
        className={styles.icons8DashboardLayout481}
        alt=""
        src="../icons8dashboardlayout48-1@2x.png"
      />{" "}
      <div className={styles.groupDiv}>
        {" "}
        <img
          className={styles.polygonIcon}
          alt=""
          src="../Pol-removebg-preview.png"
        />{" "}
      </div>{" "}
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-7.svg" />{" "}
      <img
        className={styles.ellipseIcon3}
        alt=""
        src="../ellipse-8.svg"
        onClick={onEllipseIcon2Click}
      />{" "}
      <img className={styles.groupIcon} alt="" src="../group-14.svg" />{" "}
      <Button
        className={styles.trackNowButton}
        sx={{ width: 180 }}
        variant="text"
        color="secondary"
        href="/tracknowweb"
        onClick={onTrackNowButtonClick}
      >
        {" "}
        Generate Report{" "}
      </Button>{" "}
      <img
        className={styles.icons8Dashboard481}
        alt=""
        src="../icons8dashboard48-1@2x.png"
      />{" "}
      <div className={styles.officerAnalysisDiv}>Officer Analysis</div>{" "}
      <Button
        className={styles.emerCheckButton}
        sx={{ width: 129 }}
        variant="text"
        color="secondary"
        href="/emercheckweb"
        onClick={onEmerCheckButtonClick}
      >
        {" "}
        Emer-Check{" "}
      </Button>{" "}
      <img
        className={styles.icons8CheckpointGoalFlagFo}
        alt=""
        src="../icons8checkpointgoalflagforprogressandopportunity24-1@2x.png"
      />{" "}
      <Button
        className={styles.addProfileButton}
        sx={{ width: 112 }}
        variant="text"
        color="secondary"
        href="/AddProfileWeb"
        onClick={onAddProfileButtonClick}
      >
        {" "}
        Add Profile{" "}
      </Button>{" "}
      <img
        className={styles.icons8Profile321}
        alt=""
        src="../icons8profile32-1@2x.png"
      />{" "}
      <img
        className={styles.groupIcon1}
        alt=""
        src="../Delhi_Police_Logo.png"
      />{" "}
      <div className={styles.groupDiv1}>
        {" "}
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-34.svg"
        />{" "}
        <img className={styles.lineIcon} alt="" src="../line-11.svg" />{" "}
        <div className={styles.groupDiv2}>
          {" "}
          <div className={styles.rectangleDiv4} />{" "}
        </div>{" "}
        <div className={styles.groupDiv3}>
          {" "}
          <div className={styles.rectangleDiv5} />{" "}
        </div>{" "}
        <div className={styles.officerAnalysisDiv1}>Officer Analysis</div>{" "}
      </div>{" "}
      <img className={styles.lineIcon1} alt="" src="../line-12.svg" />
      <form action="" onSubmit={handleSubmit} className={styles.grp2}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className={styles.ip1}
            onChange={(e) => setFname(e.target.value)}
            name="name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="ID">ID Number</label>
          <input
            type="number"
            className={styles.ip1}
            onChange={(e) => setID(e.target.value)}
            name="ID"
            id="ID"
          />
        </div>
        <Button className={styles.groupButton} type="submit">
          Get Analysis
        </Button>
      </form>
      {showPopup && (
        <PopupTable reports={filteredReports} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default OfficerAnalysisWeb;
