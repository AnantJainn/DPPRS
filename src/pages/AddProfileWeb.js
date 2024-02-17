import { useCallback,useState } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./AddProfileWeb.module.css";

const AddProfileWeb = () => {
  const navigate = useNavigate();

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

  const onADDTextClick = useCallback(() => {
    navigate("/SubmittedWeb");
  }, [navigate]);
//   const [userRegistration,setUserRegistration]= useState({
//     name:"",
//     idnumber:"",
//     designation:"",
//     dateofbirth:"",
//     bloodgroup:"",
//     area:""


//   });
//   const [records,setRecords]=useState([]);
//   const handleInput = (e) => {
//     const name=e.target.name;
//     const value=e.target.value;
//     console.log(name,value);
//     setUserRegistration({...userRegistration,[name]:value});
//   }
//  const handleSubmit =(e) => {
//       e.preventDefault();
//       const newRecord = {...userRegistration, id: new Date().getTime().toString() }
//       console.log(records);
//       setRecords([...records,newRecord]);

//       setUserRegistration({name: "", designation:"",
//     idnumber:"",
//     dateofbirth:"",
//     bloodgroup:"",
//     area:""});
//  }
 const [name, setFname] = useState("");
  const [id, setID] = useState("");
  const [designation, setDegisnation] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [bloodgroup, setbloodgroup] = useState("");
  const [area, setArea] = useState("");
  

  const handleSubmit = (e) => {

      e.preventDefault();

      console.log(name, id, designation, dateofbirth,bloodgroup,area);
      fetch("http://localhost:3000/user/addprofile", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
         name, id, designation, dateofbirth,bloodgroup,area
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Profile Added");
          }
        });
    
  };
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
        <img className={styles.polygonIcon} alt="" src="../polygon-1.svg" />
        <img className={styles.polygonIcon} alt="" src="../polygon-1.svg" />
        <img className={styles.polygonIcon2} alt="" src="../polygon-3.svg" />
        <img className={styles.polygonIcon3} alt="" src="../polygon-4.svg" />
        <div className={styles.aANKHDiv}>AANKH</div>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-6.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-5.svg" />
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
        sx={{ width: 134 }}
        variant="text"
        color="secondary"
        href="/tracknowweb"
        onClick={onTrackNowButtonClick}
      >
        Track now
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
        className={styles.emerCheckButton}
        sx={{ width: 129 }}
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
      <div className={styles.addProfileDiv}>Add Profile</div>
      <img
        className={styles.icons8Profile321}
        alt=""
        src="../icons8profile32-1@2x.png"
      />
      <img className={styles.groupIcon1} alt="" src="../group.svg" />
      <div className={styles.groupDiv1}>
        <div className={styles.groupDiv2}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-34.svg"
          />
          <img className={styles.lineIcon} alt="" src="../line-11.svg" />
          <div className={styles.groupDiv3}>
            <div className={styles.rectangleDiv4} />
          </div>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.addProfileDiv1}>Add Profile</div>
        </div>
        <img className={styles.lineIcon1} alt="" src="../line-12.svg" />
      </div>
      <form action="" onSubmit={handleSubmit} className={styles.grp3}>
        <div input>
        <div >
          <label htmlFor="name">Full Name</label>
          <input className={styles.ap} type="text" placeholder=" Enter Full name"
              onChange={(e) => setFname(e.target.value)}
                />
        </div>
        
        <div >
          <label htmlFor="idnumber">ID Number</label>
          <input className={styles.ap} type="text"placeholder="Enter ID Number"
              onChange={(e) => setID(e.target.value)}
                />
        </div>
        <div >
          <label htmlFor="designation">Designation</label>
          <input className={styles.ap} type="text" placeholder="Enter Designation"
              onChange={(e) => setDegisnation(e.target.value)}
                />
        </div>
        <div >

          <label  htmlFor="dateofbirth">Date Of Birth</label>
          <input className={styles.ap} type="date" placeholder="Enter Date Of Birth"
              onChange={(e) => setdateofbirth(e.target.value)}
                />
        </div>
        <div >
          <label htmlFor="bloodgroup">Blood Group</label>
          <input className={styles.ap} type="text" placeholder="Enter Blood Group"
              onChange={(e) => setbloodgroup(e.target.value)}
                />
        </div>
        <div >
          <label htmlFor="area">Patrol Area</label>
          <input className={styles.ap} type="text" placeholder="Enter Area"
              onChange={(e) => setArea(e.target.value)}
                />
        </div>
      
        
            <button type="submit" className={styles.groupButton3}>
             Add Profile
            </button>
          
      </div>
      </form>
      
      <div className={styles.rectangleDiv8} />
      
      
      <div className={styles.groupDiv7}>
        
        <div className={styles.rectangleDiv9} />
      </div>
    </div>
  );
};

export default AddProfileWeb;
