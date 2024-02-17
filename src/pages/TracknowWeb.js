import { useCallback,useState,useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./TracknowWeb.module.css";

import { Map, GeolocateControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";

const TracknowWeb = () => {
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

  const onGroupButtonClick = useCallback(() => {
    navigate("/tracknowweb1");
  }, [navigate]);


  const [lat, setLat] = useState(23.022168903229044);
  const [lng, setLng] = useState(72.54626279296826);
  const [coordinates, setCoordinates] = useState([]);
  const [toRender, setToRender] = useState(false);
  const [location,setLocation] = useState({
    longitude:0,
    latitude:0
  })
  const [officer,setOfficer] = useState([])
  const [checkpoints,setCheckPoints] = useState([])
  const [officerData,setOfficerData] = useState([])

  useEffect(()=> {
    const fetchData = async () => {
      const data = await axios.get('http://172.16.200.150:3000/patrolingofficers/12345/currentlocation')
      console.log(data);
      setLocation({
        longitude:data.data[0].longitude,
        latitude:data.data[0].latitude
      })
      setToRender(prev => !prev)
      setTimeout(fetchData,2000)
    }
    fetchData()
  },[])


useEffect(() => {
  const fetchRoute = async() => {
    const data = await axios.get(`http://172.16.200.150:3000/patrolingofficers/${officer}/checkpoint`)
    if(!data) console.log('not able to fetch chekckpoints')
    console.log(data);
    setCheckPoints(data.data)
  }
  fetchRoute()
},[]) 



  async function searchOfficer(e) {
    let id = document.getElementById('unique-id').value
    console.log(id);
    setOfficer(id)
    const officerData = await axios.get(`http://172.16.200.150:3000/patrolingofficers/${id}/profile`)
    console.log(officerData)
    setOfficerData(officerData.data)

    const fetchRoute = async() => {
      const data = await axios.get(`http://172.16.200.150:3000/patrolingofficers/${id}/checkpoint`)
      if(!data) console.log('not able to fetch chekckpoints')
      console.log(data);
      setCheckPoints(data.data)
    }
    fetchRoute()

    const fetchData = async () => {
      const data = await axios.get(`http://172.16.200.150:3000/patrolingofficers/${id}/currentlocation`)
      console.log(data);
      setLocation({
        longitude:data.data[0].longitude,
        latitude:data.data[0].latitude
      })
      setToRender(prev => !prev)
      setTimeout(fetchData,2000)
    }
    fetchData()
  }


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
        <img className={styles.polygonIcon} alt="" src="../polygon-12.svg" />
        <img className={styles.polygonIcon} alt="" src="../polygon-12.svg" />
        <img className={styles.polygonIcon2} alt="" src="../polygon-32.svg" />
        <img className={styles.polygonIcon3} alt="" src="../polygon-42.svg" />
        <div className={styles.aANKHDiv}>AANKH</div>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-62.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-52.svg" />
      </div>
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-72.svg" />
      <img
        className={styles.ellipseIcon3}
        alt=""
        src="../ellipse-81.svg"
        onClick={onEllipseIcon2Click}
      />
      <img className={styles.groupIcon} alt="" src="../group-142.svg" />
      <div className={styles.trackNowDiv}>Track now</div>
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
      <img className={styles.groupIcon1} alt="" src="../group2.svg" />
      
        <Map
          id="my-map"
          mapboxAccessToken="pk.eyJ1IjoiZ2FudGhlci03NyIsImEiOiJjbDloeXI4dWwwa2swM3ZvMDM0ZDN0emR5In0.3EWcLIvaQ9-yd6cjJQq5cQ"
          initialViewState={{
            longitude: lng,
            latitude: lat,
            zoom: 12,
            
          }}
          style={{
            width: "1000px",
            height: "800px",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            left: 290,
            top:10
          }}
          
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
          <Marker 
          longitude={location.longitude}
          latitude={location.latitude}
          />

          {checkpoints && checkpoints.map((ele,key) => {
            return <Marker 
            longitude={ele.longitude}
            latitude={ele.latitude}
            key = {key}
            color = 'red'
            />
          })}

        </Map>

        <div className={styles.uniqueId}>
          <input type="number" id= 'unique-id' className={styles.inputID} placeholder='officer id'/>
          <div className={styles.currentLocation}>
          <div className={styles.info}>
            <div className={styles.row}><div>Name</div> <div className={styles.spanInfo}>{officerData.name}</div></div>
            <div className={styles.row}><div>Designation</div> <div className={styles.spanInfo}>{officerData.designation}</div></div>
          </div>
            <div className={styles.row}><div>Longitude</div><div className={styles.spanInfo}>{location.longitude}</div></div>
            <div className={styles.row}><div>Latitude</div><div className={styles.spanInfo}>{location.latitude}</div></div>
          </div>
          <button onClick = {e=>searchOfficer(e)}>Search</button>
        </div>
    </div>
  );
};

export default TracknowWeb;
