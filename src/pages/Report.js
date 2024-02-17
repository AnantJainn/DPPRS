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

const formData = {
  name: "",
  fatherName: "",
  mobileNumber: "",
  dob: "",
  addressLine1: "",
  pincode: "",
  grievanceTitle: "",
  policeStation: "",
  grievanceDescription: "",
};

function GrievanceForm() {
  const initialFormData = {
    name: "",
    fatherName: "",
    mobileNumber: "",
    dob: "",
    // villageLocality: "",
    addressLine1: "",
    // addressLine2: "",
    pincode: "",
    grievanceTitle: "",
    policeStation: "",
    grievanceDescription: "",
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
            <Text>Name: {formData.name}</Text>
            <Text>ID: {formData.fatherName}</Text>
            <Text>Mobile Number: {formData.mobileNumber}</Text>
            <Text>Date of Birth: {formData.dob}</Text>
            <Text>Patrolling Area: {formData.villageLocality}</Text>
            <Text>Points covered: {formData.addressLine1}</Text>
            <Text>Start Location: {formData.addressLine2}</Text>
            <Text>End Location: {formData.pincode}</Text>
            <Text>FIR Registered: {formData.grievanceTitle}</Text>
            {/* <Text>Grievance Description: {formData.grievanceDescription}</Text>
                        <Text>Nearest Police Station: {formData.policeStation}</Text> */}
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
        name: formData.name,
        fatherName: formData.fatherName,
        mobileNumber: formData.mobileNumber,
        dob: formData.dob,
        addressLine1: formData.addressLine1,
        pincode: formData.pincode,
        grievanceTitle: formData.grievanceTitle,
        policeStation: formData.policeStation,
        grievanceDescription: formData.grievanceDescription,
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
            <label htmlFor="name-en">Name:</label>
            <p>नाम:</p>
            <input
              type="text"
              id="name-en"
              name="name"
              placeholder="Enter your name / तपाईंको नाम प्रविष्ट गर्नुहोस्"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="fatherName-en">ID:</label>
            <p>पहचान:</p>
            <input
              type="text"
              id="fatherName-en"
              name="fatherName"
              placeholder="Enter your ID/अपनी आईडी दर्ज करें"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobileNumber-en">Mobile Number:</label>
            <p>मोबाइल नम्बर:</p>
            <input
              type="tel"
              id="mobileNumber-en"
              name="mobileNumber"
              placeholder="Enter your mobile number / तपाईंको मोबाइल नम्बर प्रविष्ट गर्नुहोस्"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dob-en">Date of Birth:</label>
            <p>जन्म मिति:</p>
            <input
              type="date"
              id="dob-en"
              name="dob"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="addressLine1-en">Patrolling Area</label>
            <p>गश्ती क्षेत्र:</p>
            <input
              type="text"
              id="addressLine1-en"
              name="addressLine1"
              placeholder="Which area are you patrolling?/आप किस क्षेत्र में गश्त कर रहे हैं?"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pincode-en">Points covered</label>
            <p>अंक कवर किए गए:</p>
            <input
              type="number"
              id="pincode-en"
              name="pincode"
              placeholder="How many points have you covered?/आपने कितने बिंदुओं को कवर किया है?"
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="grievanceTitle-en">Start Location</label>
            <p>स्थान प्रारंभ करें:</p>
            <input
              type="text"
              id="grievanceTitle-en"
              name="grievanceTitle"
              placeholder="From which location did you start?/आपने किस स्थान से शुरुआत की?"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="policeStation-en">End Location</label>
            <p>अंतिम स्थान:</p>
            <input
              type="text"
              id="policeStation-en"
              name="policeStation"
              placeholder="What was your last location?/आपका अंतिम स्थान क्या था?"
              required
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="grievanceTitle-en">FIR Registered</label>
            <p>एफआईआर दर्ज:</p>
            <input
              type="text"
              id="grievanceTitle-en"
              name="grievanceDescription"
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
