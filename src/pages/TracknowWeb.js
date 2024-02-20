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
import { Button, TextField, Grid, Paper, Typography } from "@mui/material";
import { db } from "../firebase";
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

  // const onGroupButtonClick = useCallback(() => {
  //   navigate("/tracknowweb1");
  // }, [navigate]);

  // const [lat, setLat] = useState(23.022168903229044);
  // const [lng, setLng] = useState(72.54626279296826);
  // const [coordinates, setCoordinates] = useState([]);
  // const [toRender, setToRender] = useState(false);
  // const [location, setLocation] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });
  // const [officer, setOfficer] = useState([]);
  // const [checkpoints, setCheckPoints] = useState([]);
  // const [officerData, setOfficerData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await axios.get(
  //       "http://172.16.200.150:3000/patrolingofficers/12345/currentlocation"
  //     );
  //     console.log(data);
  //     setLocation({
  //       longitude: data.data[0].longitude,
  //       latitude: data.data[0].latitude,
  //     });
  //     setToRender((prev) => !prev);
  //     setTimeout(fetchData, 2000);
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   const fetchRoute = async () => {
  //     const data = await axios.get(
  //       http://172.16.200.150:3000/patrolingofficers/${officer}/checkpoint
  //     );
  //     if (!data) console.log("not able to fetch chekckpoints");
  //     console.log(data);
  //     setCheckPoints(data.data);
  //   };
  //   fetchRoute();
  // }, []);

  // async function searchOfficer(e) {
  //   let id = document.getElementById("unique-id").value;
  //   console.log(id);
  //   setOfficer(id);
  //   const officerData = await axios.get(
  //     http://172.16.200.150:3000/patrolingofficers/${id}/profile
  //   );
  //   console.log(officerData);
  //   setOfficerData(officerData.data);

  //   const fetchRoute = async () => {
  //     const data = await axios.get(
  //       http://172.16.200.150:3000/patrolingofficers/${id}/checkpoint
  //     );
  //     if (!data) console.log("not able to fetch chekckpoints");
  //     console.log(data);
  //     setCheckPoints(data.data);
  //   };
  //   fetchRoute();

  //   const fetchData = async () => {
  //     const data = await axios.get(
  //       http://172.16.200.150:3000/patrolingofficers/${id}/currentlocation
  //     );
  //     console.log(data);
  //     setLocation({
  //       longitude: data.data[0].longitude,
  //       latitude: data.data[0].latitude,
  //     });
  //     setToRender((prev) => !prev);
  //     setTimeout(fetchData, 2000);
  //   };
  //   fetchData();
  // }
  const initialFormData = {
    Name: "",
    ID: "",
    mobileNumber: "",
    patrollingarea: "",
    pointscovered: "",
    startlocation: "",
    endlocation: "",
    fir: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showPdf, setShowPdf] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    let newValue = value;

    if (type === "file") {
      const fileInput = e.target;
      if (fileInput.files && fileInput.files.length > 0) {
        newValue = fileInput.files;
      } else {
        newValue = null;
      }
    }

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

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

  const generatePdf = () => {
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
            {/* <Text style={styles.title1}>गश्ती रिपोर्ट"</Text> */}

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
            <Text>
              <Text style={style.text1}>Points covered:</Text>{" "}
              {formData.startlocation}
            </Text>
            <Text>{"  "}</Text>
            <Text>
              <Text style={style.text1}>Start Location:</Text>{" "}
              {formData.endlocation}
            </Text>
            <Text>{"  "}</Text>
            <Text>
              <Text style={style.text1}>End Location:</Text> {formData.fir}
            </Text>

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
      // Add a new document with a generated ID to the "Reports" collection using addDoc
      await addDoc(collection(db, "Reports"), {
        name: formData.Name,
        ID: formData.ID,
        mobileNumber: formData.mobileNumber,
        patrollingarea: formData.patrollingarea,
        pointscovered: formData.pointscovered,
        startlocation: formData.startlocation,
        endlocation: formData.endlocation,
        fir: formData.fir,
      });

      console.log("Report added successfully");
      alert("Report added successfully");
      // setFormData(true);
      setShowPdf(true);

      // Clear form data after successful submission
      // setFormData(initialFormData);
    } catch (error) {
      console.error("Error adding report: ", error);
      alert("Error adding report. Please try again.");
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
        <div className={styles.groupDiv2}>
          {" "}
          {/* <div className={styles.rectangleDiv4} />{" "} */}
        </div>{" "}
        <div className={styles.groupDiv3}>
          {" "}
          <div className={styles.rectangleDiv5} />{" "}
        </div>{" "}
        <div className={styles.generateReportDiv1}>
          Generate Report/ गश्ती रिपोर्ट
        </div>{" "}
        <img className={styles.lineIcon1} alt="" src="../line-12.svg" />
        {/* <form action="" onSubmit={handleSubmit} className={styles.grp2}>
          <div>
            <label htmlFor="Name">Name:</label>
            <p>नाम:</p>
            <input
              type="text"
              className={styles.ip1}
              required
              onChange={handleInputChange}
              name="name"
              id="Name"
              placeholder="Enter your name / तपाईंको नाम प्रविष्ट गर्नुहोस्"
            />
          </div>
          <div>
            <label htmlFor="ID">ID:</label>
            <p>पहचान:</p>
            <input
              type="number"
              className={styles.ip1}
              placeholder="Enter your ID/अपनी आईडी दर्ज करें"
              required
              onChange={handleInputChange}
              name="ID"
              id="ID"
            />
          </div>
          <div>
            <label htmlFor="mobileNumber-en">Mobile Number:</label>
            <p>मोबाइल नम्बर:</p>
            <input
              type="number"
              className={styles.ip1}
              id="mobileNumber-en"
              name="mobileNumber"
              placeholder="Enter your mobile number / तपाईंको मोबाइल नम्बर प्रविष्ट गर्नुहोस्"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="patrollingarea">Patrolling Area</label>
            <p>गश्ती क्षेत्र:</p>
            <input
              type="text"
              className={styles.ip1}
              id="patrollingarea"
              name="patrollingarea"
              placeholder="Which area are you patrolling?/आप किस क्षेत्र में गश्त कर रहे हैं?"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="pointscovered">Points covered</label>
            <p>अंक कवर किए गए:</p>
            <input
              type="number"
              className={styles.ip1}
              id="pointscovered"
              name="pointscovered"
              placeholder="How many points have you covered?/आपने कितने बिंदुओं को कवर किया है?"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="startlocation">Start Location</label>
            <p>स्थान प्रारंभ करें:</p>
            <input
              type="text"
              className={styles.ip1}
              id="startlocation"
              name="startlocation"
              placeholder="From which location did you start?/आपने किस स्थान से शुरुआत की?"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="endlocation">End Location</label>
            <p>अंतिम स्थान:</p>
            <input
              type="text"
              className={styles.ip1}
              id="endlocation"
              name="endlocation"
              placeholder="What was your last location?/आपका अंतिम स्थान क्या था?"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="fir">FIR Registered</label>
            <p>एफआईआर दर्ज:</p>
            <input
              type="number"
              className={styles.ip1}
              id="fir"
              name="fir"
              placeholder="How many FIR have you registered?/आपने कितनी एफआईआर दर्ज कराई हैं?"
              required
              onChange={handleInputChange}
            />
          </div>
          {showPdf ? (
            <div className="pdf-viewer">
              <PDFViewer width="100%" height="500px">
                {generatePdf()}
              </PDFViewer>
            </div>
          ) : (
            <div className="submit-button-wrapper">
              <button type="submit" className="button">
                Submit
              </button>
            </div>
          )}
          <div className="fileupload">{showPdf}</div>
        </form> */}
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
                <Grid item xs={12} sm={6}>
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
                </Grid>
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
                  {generatePdf()}
                </PDFViewer>
              </div>
            ) : null}{" "}
            <div className="fileupload">{showPdf}</div>
          </Paper>
        </div>
      </div>{" "}
    </div>
  );
};

export default GrievanceForm;