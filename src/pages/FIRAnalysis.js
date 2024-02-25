// import React, { useCallback, useState, useEffect } from "react";
// import { Button, TextField, Grid, Paper, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import styles from "./OfficerAnalysisWeb.module.css";
// import { collection, getDocs, where, query } from "firebase/firestore";
// import { db } from "../firebase";
// import FIRTable from "../components/FIRTable";
// const FIRAnalysis = () => {
//   const navigate = useNavigate();
//   const [location, setLocation] = useState("");
//   const [showPopup, setShowPopup] = useState(false);
//   const [firData, setFirData] = useState([]);

//   const onTrackNowButtonClick = useCallback(() => {
//     navigate("/Report");
//   }, [navigate]);
//   const onDashboardButtonClick = useCallback(() => {
//     // Please sync "Home/dashboard-web" to the project
//   }, []);

//   const onEmerCheckButtonClick = useCallback(() => {
//     navigate("/emercheckweb");
//   }, [navigate]);
//   const onEllipseIcon2Click = useCallback(() => {
//     navigate("/OfficerAnalysisWeb");
//   }, [navigate]);
//   const onAddProfileButtonClick = useCallback(() => {
//     navigate("/AddProfileWeb");
//   }, [navigate]);

//   const fetchFIRs = async () => {
//     const firCollection = collection(db, "FIRs");
//     const snapshot = await getDocs(firCollection);

//     const firData = snapshot.docs
//       .map((doc) => ({ id: doc.id, ...doc.data() }))
//       .filter((fir) =>
//         fir.location.toLowerCase().includes(location.toLowerCase())
//       );

//     setFirData(firData);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (location) {
//       await fetchFIRs();
//       setShowPopup(true);
//     }
//   };

//   const handleClosePopup = () => {
//     setShowPopup(false);
//     // Clear any form data or reset states as needed
//     setLocation("");
//     setFirData([]);
//   };

//   useEffect(() => {
//     fetchFIRs();
//   }, []);

//   return (
//     <div className={styles.officerAnalysisWebDiv}>
//       <div className={styles.rectangleDiv} />
//       <img
//         className={styles.icons8Analytics301}
//         alt=""
//         src="../icons8analytics30-1@2x.png"
//       />{" "}
//       <div className={styles.rectangleDiv1} />{" "}
//       <div className={styles.rectangleDiv2} />{" "}
//       <div className={styles.rectangleDiv3} />{" "}
//       <Button
//         className={styles.dashboardButton}
//         sx={{ width: 119 }}
//         variant="text"
//         color="secondary"
//         href="/homedashboardweb"
//         onClick={onDashboardButtonClick}
//       >
//         {" "}
//         Dashboard{" "}
//       </Button>{" "}
//       <img
//         className={styles.icons8DashboardLayout481}
//         alt=""
//         src="../icons8dashboardlayout48-1@2x.png"
//       />{" "}
//       <div className={styles.groupDiv}>
//         {" "}
//         <img
//           className={styles.polygonIcon}
//           alt=""
//           src="../Pol-removebg-preview.png"
//         />{" "}
//       </div>{" "}
//       <img className={styles.ellipseIcon2} alt="" src="../ellipse-7.svg" />{" "}
//       <img
//         className={styles.ellipseIcon3}
//         alt=""
//         src="../ellipse-8.svg"
//         onClick={onEllipseIcon2Click}
//       />{" "}
//       <img className={styles.groupIcon} alt="" src="../group-14.svg" />{" "}
//       <Button
//         className={styles.trackNowButton}
//         sx={{ width: 180 }}
//         variant="text"
//         color="secondary"
//         href="/Report"
//         onClick={onTrackNowButtonClick}
//       >
//         {" "}
//         Generate Report{" "}
//       </Button>{" "}
//       <img
//         className={styles.icons8Dashboard481}
//         alt=""
//         src="../icons8dashboard48-1@2x.png"
//       />{" "}
//       <div className={styles.officerAnalysisDiv}>Officer Analysis</div>{" "}
//       <Button
//         className={styles.emerCheckButton}
//         sx={{ width: 129 }}
//         variant="text"
//         color="secondary"
//         href="/emercheckweb"
//         onClick={onEmerCheckButtonClick}
//       >
//         {" "}
//         Emer-Check{" "}
//       </Button>{" "}
//       <img
//         className={styles.icons8CheckpointGoalFlagFo}
//         alt=""
//         src="../icons8checkpointgoalflagforprogressandopportunity24-1@2x.png"
//       />{" "}
//       <Button
//         className={styles.addProfileButton}
//         sx={{ width: 112 }}
//         variant="text"
//         color="secondary"
//         href="/AddProfileWeb"
//         onClick={onAddProfileButtonClick}
//       >
//         {" "}
//         Add Profile{" "}
//       </Button>{" "}
//       <img
//         className={styles.icons8Profile321}
//         alt=""
//         src="../icons8profile32-1@2x.png"
//       />{" "}
//       <img
//         className={styles.groupIcon1}
//         alt=""
//         src="../Delhi_Police_Logo.png"
//       />{" "}
//       <div className={styles.groupDiv1}>
//         {" "}
//         <img className={styles.lineIcon} alt="" src="../line-11.svg" />{" "}
//         <div className={styles.groupDiv3}>
//           {" "}
//           <div className={styles.rectangleDiv5} />{" "}
//         </div>{" "}
//         <div className={styles.officerAnalysisDiv1}>FIR Analysis</div>{" "}
//       </div>{" "}
//       <img className={styles.lineIcon1} alt="" src="../line-12.svg" />
//       <div
//         style={{
//           padding: "20px",
//           marginTop: 300,
//           width: 1000,
//           marginRight: 1000,
//           marginLeft: 350,
//         }}
//       >
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={3} alignItems="center" justify="center">
//             <Grid item xs={12} style={{ textAlign: "center" }}>
//               <Typography variant="subtitle1">Location</Typography>
//             </Grid>
//             <Grid item xs={12} style={{ textAlign: "center" }}>
//               <TextField
//                 label="Location"
//                 variant="outlined"
//                 fullWidth
//                 value={location}
//                 onChange={(e) => setLocation(e.target.value)}
//               />
//             </Grid>
//             <Grid
//               item
//               xs={9.3}
//               style={{ textAlign: "center", marginTop: "50px" }}
//             >
//               <Button type="submit" variant="contained" color="primary">
//                 Get Analysis
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       {showPopup && <FIRTable firData={firData} onClose={handleClosePopup} />}
//     </div>
//   );
// };

// export default FIRAnalysis;

import React, { useCallback, useState, useEffect } from "react";
import { Button, TextField, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./OfficerAnalysisWeb.module.css";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../firebase";
import FIRTable from "../components/FIRTable";
const FIRAnalysis = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [dateTimeRange, setDateTimeRange] = useState({ start: "", end: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [firData, setFirData] = useState([]);

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
  const onOfficerAnalysisButtonClick = useCallback(() => {
    navigate("/OfficerAnalysisWeb");
  }, [navigate]);
  const fetchFIRs = async () => {
    const firCollection = collection(db, "FIRs");
    const snapshot = await getDocs(firCollection);
    console.log(dateTimeRange.start);
    console.log(dateTimeRange.end);
    // Case 1: Only location
    if (location && !dateTimeRange.start && !dateTimeRange.end) {
      const firData = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((fir) =>
          fir.location.toLowerCase().includes(location.toLowerCase())
        );
      setFirData(firData);
      setShowPopup(true);
      return;
    }

    // Case 2: Only date range
    if (!location && dateTimeRange.start && dateTimeRange.end) {
      const startDateTime = new Date(dateTimeRange.start).toISOString();
      const endDateTime = new Date(dateTimeRange.end).toISOString();
      const firData = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((fir) => {
          const firDateTime = new Date(fir.datetime).toISOString();
          return firDateTime >= startDateTime && firDateTime <= endDateTime;
        });
      setFirData(firData);
      setShowPopup(true);
      return;
    }

    // Case 3: Both location and date range
    if (location && dateTimeRange.start && dateTimeRange.end) {
      const startDateTime = new Date(dateTimeRange.start).toISOString();
      const endDateTime = new Date(dateTimeRange.end).toISOString();
      const firData = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((fir) => {
          const firDateTime = new Date(fir.datetime).toISOString();
          return (
            fir.location.toLowerCase().includes(location.toLowerCase()) &&
            firDateTime >= startDateTime &&
            firDateTime <= endDateTime
          );
        });
      setFirData(firData);
      setShowPopup(true);
      return;
    }

    // Case 4: No filter
    if (!location && !dateTimeRange.start && !dateTimeRange.end) {
      alert("Please apply at least one filter");
      return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (location || (dateTimeRange.start && dateTimeRange.end)) {
      await fetchFIRs();
      setShowPopup(true);
    } else {
      // Notify the user to enter at least one filter
      // You can display an error message or handle it as per your UI/UX design
      alert("Please enter at least one filter (location or date/time)");
      console.log("Please enter at least one filter (location or date/time)");
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setLocation("");
    setDateTimeRange({ start: "", end: "" });
    setFirData([]);
  };

  useEffect(() => {
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
      {/* <div className={styles.officerAnalysisDiv}>Officer Analysis</div>{" "} */}
      <Button
        className={styles.officerAnalysisButton}
        sx={{ width: 197 }}
        variant="text"
        color="secondary"
        href="/OfficerAnalysisWeb"
        onClick={onOfficerAnalysisButtonClick}
      >
        Officer Analysis
      </Button>
      <div className={styles.firAnalysisButton1}>FIR Analysis</div>{" "}
      {/* <Button
        className={styles.firAnalysisButton}
        sx={{ width: 167 }}
        variant="text"
        color="secondary"
        href="/firanalysis"
        onClick={onFIRAnalysis}
      >
        FIR Analysis
      </Button> */}
      <img className={styles.icons81Profile321} alt="" src="../fir3.png" />
      {/* <Button
        className={styles.emerCheckButton}
        sx={{ width: 129 }}
        variant="text"
        color="secondary"
        href="/emercheckweb"
        onClick={onEmerCheckButtonClick}
      >
        {" "}
        Emer-Check{" "}
      </Button>{" "} */}
      {/* <img
        className={styles.icons8CheckpointGoalFlagFo}
        alt=""
        src="../icons8checkpointgoalflagforprogressandopportunity24-1@2x.png"
      />{" "} */}
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
        <div className={styles.officerAnalysisDiv1}>FIR Analysis</div>{" "}
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
              <Typography variant="subtitle1">Location</Typography>
              <TextField
                label="Location"
                variant="outlined"
                fullWidth
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Typography variant="subtitle1">Date Time Range</Typography>
              <TextField
                label="Start Date Time"
                type="datetime-local"
                variant="outlined"
                fullWidth
                value={dateTimeRange.start}
                onChange={(e) =>
                  setDateTimeRange({ ...dateTimeRange, start: e.target.value })
                }
              />
              <TextField
                style={{ marginTop: "50px" }}
                label="End Date Time"
                type="datetime-local"
                variant="outlined"
                fullWidth
                value={dateTimeRange.end}
                onChange={(e) =>
                  setDateTimeRange({ ...dateTimeRange, end: e.target.value })
                }
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
      {showPopup && <FIRTable firData={firData} onClose={handleClosePopup} />}
    </div>
  );
};

export default FIRAnalysis;
