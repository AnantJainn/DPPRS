import { useCallback,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import analysisData from "./Analysis_Data.json";
import {useTable} from "react-table";
import * as React from "react";
import styles from "./OfficerAnalysisWeb2.module.css";
import "./Table.css";
import { LineChart, Line} from 'recharts';
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";


const OfficerAnalysisWeb2 = () => {
  const navigate = useNavigate();

  const onDashboardTextClick = useCallback(() => {
    navigate("/homedashboardweb");
  }, [navigate]);

  const onEllipseIcon2Click = useCallback(() => {
    navigate("/OfficerAnalysisWeb");
  }, [navigate]);

  const onTrackNowTextClick = useCallback(() => {
    navigate("/tracknowweb");
  }, [navigate]);

  const onEmerCheckTextClick = useCallback(() => {
    navigate("/emercheckweb");
  }, [navigate]);

  const onAddProfileTextClick = useCallback(() => {
    navigate("/AddProfileWeb");
  }, [navigate]);
  const data = React.useMemo(() => analysisData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "DATE",
        accessor: "date",
      },
      {
        Header: "START TIME",
        accessor: "start_time",
      },
      {
        Header: "END TIME",
        accessor: "end_time",
      },
      {
        Header: "DURATION",
        accessor: "duration",
      },
      {
        Header: "FIR REPORTED",
        accessor: "fir",
      },
      {
        Header: "START CHECKPOINT",
        accessor: "start_check",
      },
      {
        Header: "END CHECKPOINT",
        accessor: "end_check",
      }
    ],
    []
    
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
    const piedata = [
      { name: "Total Time  (in minutes)", police:1040,fill: '#00C49F' },
      { name: "Patroling Time (in minutes)", police: 740,fill: '#FF8042' },
      { name: "Stop Time  (in minutes)", police:300,fill: '#FFBB28'  },
      { name: "FIR Reported", police: 13,fill: '#0088FE' },
    ];
    // const graphdata = [
    //   {
    //     name: 'Ayushi ',
    //     total_time: 1040,
    //     patroling_duration: 740,
    //     stop_duration: 300,
    //     report: 13,
    //   },
    //   {
    //     name: 'Ankit',
    //     total_time: 1540,
    //     patroling_duration: 1140,
    //     stop_duration: 400,
    //     report: 17,
    //   },
    //   {
    //     name: 'Tirth',
    //     total_time: 940,
    //     patroling_duration: 640,
    //     stop_duration: 300,
    //     report: 9,
    //   },
    //   {
    //     name: 'Jay',
    //     total_time: 1740,
    //     patroling_duration: 1590,
    //     stop_duration: 150,
    //     report: 22,
    //   },
    // ];

   
  return (
    <div className={styles.officerAnalysis2Web}>
      <div className={styles.rectangleDiv} />
      <img
        className={styles.icons8Analytics301}
        alt=""
        src="../icons8analytics30-1@2x.png"
      />
      <img className={styles.rectangleIcon} alt="" src="../rectangle-35.svg" />
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <div className={styles.dashboardDiv} onClick={onDashboardTextClick}>
        Dashboard
      </div>
      <img
        className={styles.icons8DashboardLayout481}
        alt=""
        src="../icons8dashboardlayout48-1@2x.png"
      />
      <div className={styles.groupDiv}>
        <img className={styles.polygonIcon} alt="" src="../polygon-12.svg" />
        <img className={styles.polygonIcon} alt="" src="../polygon-12.svg" />
        <img className={styles.polygonIcon2} alt="" src="../polygon-32.svg" />
        <img className={styles.polygonIcon3} alt="" src="../polygon-42.svg" />
        <div className={styles.aANKHDiv}>AANKH</div>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-67.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-57.svg" />
      </div>
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-73.svg" />
      <img
        className={styles.ellipseIcon3}
        alt=""
        src="../ellipse-81.svg"
        onClick={onEllipseIcon2Click}
      />
      <img className={styles.groupIcon} alt="" src="../group-142.svg" />
      <div className={styles.trackNowDiv} onClick={onTrackNowTextClick}>
        Track now
      </div>
      <img
        className={styles.icons8Dashboard481}
        alt=""
        src="../icons8dashboard48-1@2x.png"
      />
      <div className={styles.officerAnalysisDiv}>Officer Analysis</div>
      <div className={styles.emerCheckDiv} onClick={onEmerCheckTextClick}>
        Emer-Check
      </div>
      <img
        className={styles.icons8CheckpointGoalFlagFo}
        alt=""
        src="../icons8checkpointgoalflagforprogressandopportunity24-1@2x.png"
      />
      <div className={styles.addProfileDiv} onClick={onAddProfileTextClick}>
        Add Profile
      </div>
      <img
        className={styles.icons8Profile321}
        alt=""
        src="../icons8profile32-1@2x.png"
      />
      <img className={styles.groupIcon1} alt="" src="../group7.svg" />
      <img className={styles.lineIcon} alt="" src="../line-1110.svg" />
      <div className={styles.groupDiv1}>
        <div className={styles.rectangleDiv4} />
      </div>
      <div className={styles.groupDiv2}>
        <div className={styles.rectangleDiv5} />
      </div>
      <div className={styles.officerAnalysisDiv1}>Officer Analysis</div>
      <img className={styles.lineIcon1} alt="" src="../line-127.svg" />
      <div className={styles.groupDiv3}>
        <div className={styles.rectangleDiv6} />
      </div>
     
      <div className={styles.groupDiv4}>
        
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
       
      </div>
      <div className={styles.hemlo}>
           
      <PieChart width={500} height={400}>
          <Pie
            dataKey="police"
            isAnimationActive={false}
            data={piedata}
            cx={200}
            cy={200}
            outerRadius={175}
  
            fill="#fff"
            label
          />
          
          <Tooltip />
        </PieChart>
       
        <BarChart
          width={600}
          height={400}
          data={piedata}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="police" fill="#fff" background={{ fill: "#eee" }} />
        </BarChart>
      
           </div>
            </div>
            
    </div>
  );
};

export default OfficerAnalysisWeb2;
