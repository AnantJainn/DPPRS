import React, { useCallback, useState, useEffect } from "react";
import { Button, TextField, Grid, Paper, Typography } from "@mui/material";
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
  const [firData, setFirData] = useState({});
  const onTrackNowButtonClick = useCallback(() => {
    navigate("/Report");
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
  const onFIRAnalysis = useCallback(() => {
    navigate("/firanalysis");
  }, [navigate]);

  const fetchReports = async () => {
    const reportsCollection = collection(db, "Reports");
    const snapshot = await getDocs(reportsCollection);
    const reportData = snapshot.docs.map((doc) => ({
      ID: doc.id,
      ...doc.data(),
    }));
    setReports(reportData);
  };
  const fetchFIRs = async () => {
    const firCollection = collection(db, "FIRs");
    const snapshot = await getDocs(firCollection);
    const firData = snapshot.docs.reduce((acc, doc) => {
      const data = doc.data();
      const grievanceId = data.grievanceId;
      if (!acc[grievanceId]) {
        acc[grievanceId] = [];
      }
      acc[grievanceId].push({
        id: doc.id,
        ...data,
      });
      return acc;
    }, {});

    setFirData(firData);
    console.log("FIRs Data:", firData);
  };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (name && ID) {
  //     const filtered = reports.filter(
  //       (report) => report.name === name && report.ID === ID
  //     );
  //     setFilteredReports(filtered);
  //     setShowPopup(true); // Show popup after setting filtered reports
  //   } else {
  //     // If name or ID is empty, reset filteredReports to all reports
  //     setFilteredReports(reports);
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && ID) {
      const filtered = reports.filter(
        (report) => report.name === name && report.ID === ID.trim() // Trim ID
      );
      setFilteredReports(filtered);
      setShowPopup(true);
    } else {
      setFilteredReports(reports);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  useEffect(() => {
    fetchReports();
    fetchFIRs();
  }, []);

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
        href="/Report"
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
        className={styles.firAnalysisButton}
        sx={{ width: 167 }}
        variant="text"
        color="secondary"
        href="/firanalysis"
        onClick={onFIRAnalysis}
      >
        FIR Analysis
      </Button>
      <img
        className={styles.icons81Profile321}
        alt=""
        src="../fir3.png"
      />
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
        <img className={styles.lineIcon} alt="" src="../line-11.svg" />{" "}
        <div className={styles.groupDiv3}>
          {" "}
          <div className={styles.rectangleDiv5} />{" "}
        </div>{" "}
        <div className={styles.officerAnalysisDiv1}>Officer Analysis</div>{" "}
      </div>{" "}
      <img className={styles.lineIcon1} alt="" src="../line-12.svg" />
      <div
        style={{
          padding: "20px",
          marginTop: 300,
          width: 1000,
          marginRight: 1000,
          marginLeft: 350,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} alignItems="center" justify="center">
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Typography variant="subtitle1">Full Name</Typography>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setFname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Typography variant="subtitle1">ID Number</Typography>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <TextField
                label="ID Number"
                variant="outlined"
                fullWidth
                value={ID}
                onChange={(e) => setID(e.target.value)}
              />
            </Grid>
            <Grid
              item
              xs={9.3}
              style={{ textAlign: "center", marginTop: "50px" }}
            >
              <Button type="submit" variant="contained" color="primary">
                Get Analysis
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* {showPopup && (
        <PopupTable reports={filteredReports} onClose={handleClosePopup} />
      )} */}
      {showPopup && (
        <PopupTable
          reports={filteredReports}
          firData={firData}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default OfficerAnalysisWeb;
