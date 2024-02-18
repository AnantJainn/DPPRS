import React, { useState } from "react";
import axios from "axios";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import styles from "./GrievanceForm.module.css";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function GrievanceForm() {
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

  const generatePdf = () => {
    return (
      <Document>
        <Page size="A4">
          <View style={styles.container}>
            <Text>Name: {formData.Name}</Text>
            <Text>ID: {formData.ID}</Text>
            <Text>Mobile Number: {formData.mobileNumber}</Text>
            <Text>Date of Birth: {formData.patrollingarea}</Text>
            <Text>Patrolling Area: {formData.pointscovered}</Text>
            <Text>Points covered: {formData.startlocation}</Text>
            <Text>Start Location: {formData.endlocation}</Text>
            <Text>End Location: {formData.fir}</Text>
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

  const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
  });

  return (
    <div className="grievance-form-wrapper">
      <div className="grievance-form">
        <h1>Patrolling Report / गश्ती रिपोर्ट</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Name">Name:</label>
            <p>नाम:</p>
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder="Enter your name / तपाईंको नाम प्रविष्ट गर्नुहोस्"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="ID">ID:</label>
            <p>पहचान:</p>
            <input
              type="number"
              id="ID"
              name="ID"
              placeholder="Enter your ID/अपनी आईडी दर्ज करें"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobileNumber-en">Mobile Number:</label>
            <p>मोबाइल नम्बर:</p>
            <input
              type="number"
              id="mobileNumber-en"
              name="mobileNumber"
              placeholder="Enter your mobile number / तपाईंको मोबाइल नम्बर प्रविष्ट गर्नुहोस्"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="patrollingarea">Patrolling Area</label>
            <p>गश्ती क्षेत्र:</p>
            <input
              type="text"
              id="patrollingarea"
              name="patrollingarea"
              placeholder="Which area are you patrolling?/आप किस क्षेत्र में गश्त कर रहे हैं?"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pointscovered">Points covered</label>
            <p>अंक कवर किए गए:</p>
            <input
              type="number"
              id="pointscovered"
              name="pointscovered"
              placeholder="How many points have you covered?/आपने कितने बिंदुओं को कवर किया है?"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="startlocation">Start Location</label>
            <p>स्थान प्रारंभ करें:</p>
            <input
              type="text"
              id="startlocation"
              name="startlocation"
              placeholder="From which location did you start?/आपने किस स्थान से शुरुआत की?"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="endlocation">End Location</label>
            <p>अंतिम स्थान:</p>
            <input
              type="text"
              id="endlocation"
              name="endlocation"
              placeholder="What was your last location?/आपका अंतिम स्थान क्या था?"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fir">FIR Registered</label>
            <p>एफआईआर दर्ज:</p>
            <input
              type="number"
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
        </form>
      </div>
    </div>
  );
}

export default GrievanceForm;
