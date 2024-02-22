import React, { useState } from "react";
import { Button, Grid, TextField, MenuItem, Paper } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const FIRForm = () => {
  const [firDetails, setFIRDetails] = useState([]);

  const handleInputChange = (index, e) => {
    const { name, value, files } = e.target;
    const newValue = name === "image" ? files[0] : value;

    const updatedFIRDetails = [...firDetails];
    updatedFIRDetails[index] = {
      ...updatedFIRDetails[index],
      [name]: newValue,
    };

    setFIRDetails(updatedFIRDetails);
  };

  const handleAddFIR = () => {
    setFIRDetails((prevDetails) => [
      ...prevDetails,
      { datetime: "", crimetype: "", location: "" },
    ]);
  };

  const handleRemoveFIR = (index) => {
    const updatedFIRDetails = [...firDetails];
    updatedFIRDetails.splice(index, 1);
    setFIRDetails(updatedFIRDetails);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Add FIR data to Firestore collection
      const promises = firDetails.map(async (fir) => {
        const docRef = await addDoc(collection(db, "FIRs"), {
          datetime: fir.datetime,
          crimetype: fir.crimetype,
          location: fir.location,
        });
        console.log("FIR added with ID: ", docRef.id);
        return docRef;
      });

      await Promise.all(promises);

      // Reset form fields
      setFIRDetails([]);

      alert("FIRs submitted successfully");
    } catch (error) {
      console.error("Error adding FIRs: ", error);
      alert("Error adding FIRs. Please try again.");
    }
  };

  return (
    <div style={{ padding: 20, marginTop: 200 }}>
      <Paper elevation={3} style={{ padding: 20 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {firDetails.map((fir, index) => (
              <React.Fragment key={index}>
                <Grid item xs={12} sm={3}>
                  <TextField
                    type="datetime-local"
                    label="Date/Time"
                    name="datetime"
                    value={fir.datetime}
                    onChange={(e) => handleInputChange(index, e)}
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
                    onChange={(e) => handleInputChange(index, e)}
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
                    onChange={(e) => handleInputChange(index, e)}
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
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit FIRs
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default FIRForm;
