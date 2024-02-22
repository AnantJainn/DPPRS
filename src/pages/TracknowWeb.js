import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TracknowWeb.module.css";
import { collection, addDoc } from "firebase/firestore";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import React from "react";
import { db } from "../firebase";
import { Button, Grid, TextField, MenuItem, Paper } from "@mui/material";
// import { Map, GeolocateControl, Marker } from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";
// import axios from "axios";

const GrievanceForm = () => {
  const navigate = useNavigate();

  const onDashboardButtonClick = useCallback(() => {
    navigate("/homedashboardweb");
  }, [navigate]);

  const onEllipseIcon2Click = useCallback(() => {
    navigate("/homedashboardweb");
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

  const [formData, setFormData] = useState({
    Name: "",
    ID: "",
    mobileNumber: "",
    patrollingarea: "",
    pointscovered: "",
    // startlocation: "",
    // endlocation: "",
    firDetails: [], // Store FIR details as an array
  });
  const [showPdf, setShowPdf] = useState(false);
  const style = StyleSheet.create({
    container1: {
      padding: 20,
    },
    header: {
      flexDirection: "col",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
    },
    logo: {
      width: 75,
      height: 75,
      marginRight: 6,
    },
    delhiPolice: {
      fontSize: 40,
      fontWeight: "bold",
      // top: 10
    },
    delhiPolice1: {
      fontSize: 40,
      fontWeight: "bold",
      // top: 10
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      left: 190,
      top: 0,
    },
    signatureArea: {
      position: "absolute",
      top: 700,
      right: 20,
    },
    watermark: {
      position: "absolute",
      top: 220,
      left: 90,
      width: "70%",
      height: "70%",
      opacity: 0.2,
    },
    text1: {
      fontSize: 24,
      fontWeight: 900,
    },
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFIRInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFIRDetails = [...formData.firDetails];
    updatedFIRDetails[index] = {
      ...updatedFIRDetails[index],
      [name]: value,
    };
    setFormData({
      ...formData,
      firDetails: updatedFIRDetails,
    });
  };

  const handleAddFIR = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      firDetails: [
        ...prevFormData.firDetails,
        { datetime: "", crimetype: "", location: "" },
      ],
    }));
  };

  const handleRemoveFIR = (index) => {
    const updatedFIRDetails = [...formData.firDetails];
    updatedFIRDetails.splice(index, 1);
    setFormData({
      ...formData,
      firDetails: updatedFIRDetails,
    });
  };
  const generatePdf = (formData) => {
    // Use formData to populate the PDF content
    console.log("formData in generatePdf:", formData);
    return (
      <Document>
        <Page size="A4">
          <View style={style.container1}>
            <Image style={style.watermark} src="../Delhi_Police_Logo.png" />
            {/* Logo and Delhi Police */}
            <View style={style.header}>
              <Image style={style.logo} src="../Delhi_Police_Logo.png" />
              <Text style={style.delhiPolice}>DELHI POLICE</Text>
            </View>

            {/* Title */}
            <Text style={style.title}>Patrolling Report</Text>

            {/* Form Data */}
            <Text>{"  "}</Text>
            <Text>{"  "}</Text>
            <Text>{"  "}</Text>
            <Text>
              <Text style={style.text1}>Name:</Text> {formData.Name}
            </Text>
            <Text>{"  "}</Text>
            <Text>
              <Text style={style.text1}>ID:</Text> {formData.ID}
            </Text>
            <Text>{"  "}</Text>
            <Text>
              <Text style={style.text1}>Mobile Number:</Text>{" "}
              {formData.mobileNumber}
            </Text>
            <Text>{"  "}</Text>
            <Text>
              <Text style={style.text1}>Date of Birth:</Text>{" "}
              {formData.patrollingarea}
            </Text>
            <Text>{"  "}</Text>
            <Text>
              <Text style={style.text1}>Patrolling Area:</Text>{" "}
              {formData.pointscovered}
            </Text>
            <Text>{"  "}</Text>

            {/* FIR Details */}
            <Text>{"  "}</Text>
            <Text>{"  "}</Text>
            <Text>
              <Text style={style.text1}>FIR Details:</Text>
            </Text>
            {formData.firDetails.map((fir, index) => (
              <View key={index}>
                <Text>
                  <Text style={style.text1}>DateTime:</Text> {fir.datetime}
                </Text>
                <Text>
                  <Text style={style.text1}>Crime Type:</Text> {fir.crimetype}
                </Text>
                <Text>
                  <Text style={style.text1}>Location:</Text> {fir.location}
                </Text>
              </View>
            ))}

            {/* Signature Area */}
            <View style={style.signatureArea}>
              <Text style={style.text1}>Signature: ____________</Text>
              <Text>{"  "}</Text>
              <Text style={style.text1}>Name: </Text>
              <Text style={style.text1}>Designation: </Text>
              <Text style={style.text1}>Police Station: </Text>
            </View>
          </View>
        </Page>
      </Document>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add Grievance data to Firestore collection
      const grievanceDocRef = await addDoc(collection(db, "Reports"), {
        name: formData.Name,
        ID: formData.ID,
        mobileNumber: formData.mobileNumber,
        patrollingarea: formData.patrollingarea,
        pointscovered: formData.pointscovered,
      });

      console.log("Report added successfully");
      alert("Report added successfully");

      // Add FIR data to Firestore collection
      const promises = formData.firDetails.map(async (fir) => {
        const docRef = await addDoc(collection(db, "FIRs"), {
          datetime: fir.datetime,
          crimetype: fir.crimetype,
          location: fir.location,
          grievanceId: grievanceDocRef.id,
        });
        console.log("FIR added with ID: ", docRef.id);
        return docRef;
      });

      await Promise.all(promises);

      // Show PDF after data is submitted

      generatePdf(formData); // Generate PDF with updated formData
      setShowPdf(true); // Show PDF viewer

      // Clear form data after successful submission
      // setFormData({
      //   Name: "",
      //   ID: "",
      //   mobileNumber: "",
      //   patrollingarea: "",
      //   pointscovered: "",
      //   firDetails: [],
      // });

      alert("Grievance and FIRs submitted successfully");
    } catch (error) {
      console.error("Error adding grievance report: ", error);
      alert("Error adding grievance report. Please try again.");
    }
  };

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
        <img
          className={styles.polygonIcon}
          alt=""
          src="../Pol-removebg-preview.png"
        />
      </div>
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-72.svg" />
      <img
        className={styles.ellipseIcon3}
        alt=""
        src="../ellipse-81.svg"
        onClick={onEllipseIcon2Click}
      />
      <img className={styles.groupIcon} alt="" src="../group-142.svg" />
      <div className={styles.trackNowDiv}>GENERATE REPORT</div>
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
        href="/AddProfileWeb"
        onClick={onAddProfileButtonClick}
      >
        Add Profile
      </Button>
      <img
        className={styles.icons8Profile321}
        alt=""
        src="../icons8profile32-1@2x.png"
      />
      <img
        className={styles.groupIcon1}
        alt=""
        src="../Delhi_Police_Logo.png"
      />{" "}
      <div className={styles.groupDiv1}>
        {" "}
        {/* <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-34.svg"
        />{" "} */}
        <img className={styles.lineIcon} alt="" src="../line-11.svg" />{" "}
        <div className={styles.groupDiv2}> </div>{" "}
        <div className={styles.groupDiv3}>
          {" "}
          <div className={styles.rectangleDiv5} />{" "}
        </div>{" "}
        <div className={styles.generateReportDiv1}>
          Generate Report/ गश्ती रिपोर्ट
        </div>{" "}
        <img className={styles.lineIcon1} alt="" src="../line-12.svg" />
        <div style={{ padding: 20, marginTop: 200 }}>
          <Paper elevation={3} style={{ padding: 20 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name/नाम:"
                    variant="outlined"
                    fullWidth
                    name="Name"
                    value={formData.Name}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="ID/पहचान:"
                    variant="outlined"
                    fullWidth
                    name="ID"
                    value={formData.ID}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Mobile Number/मोबाइल नम्बर:"
                    variant="outlined"
                    fullWidth
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Patrolling Area/गश्ती क्षेत्र:"
                    variant="outlined"
                    fullWidth
                    name="patrollingarea"
                    value={formData.patrollingarea}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Points Covered/अंक कवर किए गए:"
                    variant="outlined"
                    fullWidth
                    name="pointscovered"
                    value={formData.pointscovered}
                    onChange={handleInputChange}
                  />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <TextField
                    label="Start Location/स्थान प्रारंभ करें:"
                    variant="outlined"
                    fullWidth
                    name="startlocation"
                    value={formData.startlocation}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="End Location/अंतिम स्थान:"
                    variant="outlined"
                    fullWidth
                    name="endlocation"
                    value={formData.endlocation}
                    onChange={handleInputChange}
                  />
                </Grid> */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="FIR Registered/एफआईआर दर्ज:"
                    variant="outlined"
                    fullWidth
                    name="fir"
                    value={formData.fir}
                    onChange={handleInputChange}
                  />
                </Grid>
                {formData.firDetails.map((fir, index) => (
                  <React.Fragment key={index}>
                    <Grid item xs={12} sm={3}>
                      <TextField
                        type="datetime-local"
                        label="Date/Time"
                        name="datetime"
                        value={fir.datetime}
                        onChange={(e) => handleFIRInputChange(index, e)}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <TextField
                        select
                        label="Crime Type"
                        name="crimetype"
                        value={fir.crimetype}
                        onChange={(e) => handleFIRInputChange(index, e)}
                        fullWidth
                        required
                      >
                        <MenuItem value="Theft">Theft</MenuItem>
                        <MenuItem value="Assault">Assault</MenuItem>
                        <MenuItem value="Vandalism">Vandalism</MenuItem>
                        {/* Add more crime types as needed */}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <TextField
                        label="Location"
                        name="location"
                        value={fir.location}
                        onChange={(e) => handleFIRInputChange(index, e)}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={3}>
                      <Button
                        onClick={() => handleRemoveFIR(index)}
                        variant="outlined"
                        color="secondary"
                      >
                        Remove FIR
                      </Button>
                    </Grid>
                  </React.Fragment>
                ))}
                <Grid item xs={12}>
                  <Button
                    onClick={handleAddFIR}
                    variant="contained"
                    color="primary"
                  >
                    Add FIR
                  </Button>
                </Grid>

                {/* Submit Button */}

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
            {showPdf ? (
              <div className="pdf-viewer">
                <PDFViewer width="100%" height="500px">
                  {generatePdf(formData)}
                </PDFViewer>
              </div>
            ) : null}

            <div className="fileupload">{showPdf}</div>
          </Paper>
        </div>
      </div>{" "}
    </div>
  );
};

export default GrievanceForm;
