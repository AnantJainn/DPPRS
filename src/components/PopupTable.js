import React from "react";
import { Button } from "@mui/material";
import styles from "./PopupTable.module.css";

const PopupTable = ({ reports, onClose }) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popupInner}>
        <Button className={styles.closeButton} onClick={onClose}>
          &times;
        </Button>
        <div className="table-container">
          {reports.length > 0 ? (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>ID</th>

                  <th>Patrolling Area</th>
                  <th>Points Covered</th>

                  <th>FIR</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report, index) => (
                  <tr key={index}>
                    <td>{report.name}</td>
                    <td>{report.ID}</td>

                    <td>{report.patrollingarea}</td>
                    <td>{report.pointscovered}</td>

                    <td>{report.firegistered}</td>
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

export default PopupTable;
// import React from "react";
// import { Button } from "@mui/material";
// import styles from "./PopupTable.module.css";

// const PopupTable = ({ reports, firData, onClose }) => {
//   return (
//     <div className={styles.popup}>
//       <div className={styles.popupInner}>
//         <Button className={styles.closeButton} onClick={onClose}>
//           &times;
//         </Button>
//         <div className="table-container">
//           {reports.length > 0 ? (
//             <table className={styles.table}>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>ID</th>
//                   <th>Patrolling Area</th>
//                   <th>Points Covered</th>
//                   <th>FIR</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {reports.map((report, index) => (
//                   <tr key={index}>
//                     <td>{report.name}</td>
//                     <td>{report.ID}</td>
//                     <td>{report.patrollingarea}</td>
//                     <td>{report.pointscovered}</td>
//                     <td>
//                       {/* Display FIR data */}
//                       {firData[report.ID] ? (
//                         <ul>
//                           {firData[report.ID].map((fir, index) => (
//                             <li key={index}>
//                               Crimetype: {fir.crimetype}, Location:{" "}
//                               {fir.location}, Datetime: {fir.datetime}
//                             </li>
//                           ))}
//                         </ul>
//                       ) : (
//                         "No FIRs found"
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           ) : (
//             <p>No reports found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopupTable;
