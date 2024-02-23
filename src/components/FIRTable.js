import React from "react";
import { Button } from "@mui/material";
import styles from "./PopupTable.module.css";
const FIRTable = ({ firData, onClose }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupInner}>
        <Button className={styles.closeButton} onClick={onClose}>
          &times;
        </Button>
        <div className="table-container">
          {firData.length > 0 ? (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Crime Type</th>
                  <th>Date Time</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {firData.map((fir) => (
                  <tr key={fir.id}>
                    <td>{fir.crimetype}</td>
                    <td>{fir.datetime}</td>
                    <td>{fir.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No reports found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FIRTable;
