import { useCallback ,useState} from "react";
import { Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./OfficerAnalysisWeb.module.css";

const OfficerAnalysisWeb = () => {
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

  const onEmerCheckButtonClick = useCallback(() => {
    // Please sync "emercheck-web" to the project
  }, []);

  const onAddProfileButtonClick = useCallback(() => {
    navigate("/AddProfileWeb");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/OfficerAnalysisWeb2");
  }, [navigate]);
  const [name, setFname] = useState("");
  const [id, setID] = useState("");
  
 const handleSubmit =(e) => {
      e.preventDefault();
      console.log(name, id);
      fetch("http://172.16.200.150:3000/patrolingofficers/:idnumber/profile", {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
         name, id}),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Successful");
          } else {
            alert("User Found");
          }
        });
      };
      function SubmitButton(){
        if (name && id){
          return <button type="button">Get Analysis</button>
        } else {
          return <button type="button" disabled>Get Analysis</button>
        };
      };
  return (
    <div className={styles.officerAnalysisWebDiv}>
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
      <div className={styles.officerAnalysisDiv}>Officer Analysis</div>
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
      <img className={styles.groupIcon1} alt="" src="../group.svg" />
      <div className={styles.groupDiv1}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="../rectangle-34.svg"
        />
        <img className={styles.lineIcon} alt="" src="../line-11.svg" />
        <div className={styles.groupDiv2}>
          <div className={styles.rectangleDiv4} />
        </div>
        <div className={styles.groupDiv3}>
          <div className={styles.rectangleDiv5} />
        </div>
        <div className={styles.officerAnalysisDiv1}>Officer Analysis</div>
      </div>
      <img className={styles.lineIcon1} alt="" src="../line-12.svg" />
      <form action="" onSubmit={handleSubmit} className={styles.grp2}>
        <div >
          <label htmlFor="name">Full Name</label>
          <input  type="text" className={styles.ip1}
          onChange={(e) => setFname(e.target.value)}
          name="name" id="name"/>
        </div>
        <div >
          <label htmlFor="id">ID Number</label>
          <input type="text" className={styles.ip1}
          onChange={(e) => setID(e.target.value)}
           name="id" id="id"/>
        </div>
         if (name && id){
        <Button
        className={styles.groupButton}
        type = "submit"
        href="/OfficerAnalysisWeb2"
      >
        Get Analysis
      </Button>
}
else{
  <Button
  className={styles.groupButton}
  type = "submit"
  disabled
>
  Get Analysis
</Button>

}
      </form>
      <div className={styles.groupDiv4}>
        <div className={styles.rectangleDiv6} />
      </div>
    </div>
  );
};

export default OfficerAnalysisWeb;
