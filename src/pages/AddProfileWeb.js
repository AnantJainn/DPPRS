import { useCallback, useState } from "react";
import { Button, TextField, Grid, Paper, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import styles from "./AddProfileWeb.module.css";

import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
const AddProfileWeb = () => {
  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [designation, setDesignation] = useState("");
  // const [dateOfBirth, setDateOfBirth] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [area, setArea] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add a new document with a generated ID to the "Profiles" collection using addDoc
      await addDoc(collection(db, "Profiles"), {
        name: name,
        id: id,
        designation: designation,
        // dateOfBirth: dateOfBirth,
        bloodGroup: bloodGroup,
        area: area,
      });

      console.log("Profile added successfully");
      alert("Profile added successfully");

      // Clear input fields after successful submission
      setName("");
      setID("");
      setDesignation("");
      // setDateOfBirth("");
      setBloodGroup("");
      setArea("");
    } catch (error) {
      console.error("Error adding profile: ", error);
      alert("Error adding profile. Please try again.");
    }
  };
  const navigate = useNavigate();
  const onFIRAnalysis = useCallback(() => {
    navigate("/firanalysis");
  }, [navigate]);

  const onDashboardButtonClick = useCallback(() => {
    // Please sync "Home/dashboard-web" to the project
  }, []);

  const onEllipseIcon2Click = useCallback(() => {
    // Please sync "Home/dashboard-web" to the project
  }, []);

  const onTrackNowButtonClick = useCallback(() => {
    // Please sync "tracknow-web" to the project
  }, []);

  const onOfficerAnalysisButtonClick = useCallback(() => {
    navigate("/OfficerAnalysisweb");
  }, [navigate]);

  const onEmerCheckButtonClick = useCallback(() => {
    navigate("/emercheckweb");
  }, [navigate]);

  const onRectangleButton1Click = useCallback(() => {
    navigate("/SubmittedWeb");
  }, [navigate]);

  return (
    <div className={styles.addProfileWebDiv}>
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
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-7.svg" />
      <img
        className={styles.ellipseIcon3}
        alt=""
        src="../ellipse-8.svg"
        onClick={onEllipseIcon2Click}
      />
      <img className={styles.groupIcon} alt="" src="../group-14.svg" />
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
      {/* <Button
        className={styles.emerCheckButton}
        sx={{ width: 129 }}
        variant="text"
        color="secondary"
        href="/emercheckweb"
        onClick={onEmerCheckButtonClick}
      >
        Emer-Check
      </Button> */}
      <img
        className={styles.icons8CheckpointGoalFlagFo}
        alt=""
        src="../fir3.png"
      />
      <div className={styles.addProfileDiv}>Add Profile</div>{" "}
      <img
        className={styles.icons91CheckpointGoalFlagFo}
        alt=""
        src="../icons8profile32-1@2x.png"
      />
      {/* <img
        className={styles.icons8Profile321}
        alt=""
        src="../icons8checkpointgoalflagforprogressandopportunity24-1@2x.png"
      /> */}
      <img
        className={styles.groupIcon1}
        alt=""
        src="../Delhi_Police_Logo.png"
      />
      <div className={styles.groupDiv1}>
        {/* <div className={styles.groupDiv2}> */}
        {/* <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-34.svg"
          /> */}
        <img className={styles.lineIcon} alt="" src="../line-11.svg" />
        <div className={styles.groupDiv3}>
          {/* <div className={styles.rectangleDiv4} /> */}
        </div>
        <div className={styles.groupDiv4}>
          <div className={styles.rectangleDiv5} />
        </div>
        <div className={styles.addProfileDiv1}>Add Profile</div>
        {/* </div> */}
        <img className={styles.lineIcon1} alt="" src="../line-12.svg" />
      </div>
      <div
        style={{
          padding: "20px",
          marginTop: 275,
          width: 1000,
          marginRight: 1000,
          marginLeft: 350,
        }}
      >
        <Paper
          elevation={3}
          style={{
            padding: "30px",
            marginBottom: "20px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="ID Number"
                  variant="outlined"
                  fullWidth
                  value={id}
                  onChange={(e) => setID(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Designation"
                  variant="outlined"
                  fullWidth
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Blood Group"
                  variant="outlined"
                  fullWidth
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Patrol Area"
                  variant="outlined"
                  fullWidth
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Add Profile
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default AddProfileWeb;
