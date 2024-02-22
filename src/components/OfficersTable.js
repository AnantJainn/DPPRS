import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import styles from "./OfficersTable.module.css";
const OfficersTable = () => {
  const [officers, setOfficers] = useState([]);

  useEffect(() => {
    const fetchOfficers = async () => {
      const officersCollection = collection(db, "Profiles");
      const officersSnapshot = await getDocs(officersCollection);
      const officersList = officersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOfficers(officersList);
    };

    fetchOfficers();
  }, []);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Blood Group</th>
          <th>Designation</th>
          <th>Patrolling Area</th>
        </tr>
      </thead>
      <tbody>
        {officers.map((officer, id) => (
          <tr key={id}>
            <td>{officer.name}</td>
            <td>{officer.id}</td>
            <td>{officer.bloodGroup}</td>
            <td>{officer.designation}</td>
            <td>{officer.area}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OfficersTable;
