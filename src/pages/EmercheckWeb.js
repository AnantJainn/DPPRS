import { useCallback } from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./EmercheckWeb.module.css";
import React, { useEffect, useState } from "react";
import { Map, GeolocateControl, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";
// import {IoLocationSharp} from "react-icons/fa";
const EmercheckWeb = () => {
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
    navigate("/OfficerAnalysisWeb");
  }, [navigate]);

  const onAddProfileButtonClick = useCallback(() => {
    navigate("/AddProfileWeb");
  }, [navigate]);

  const onEmergencyAlertButtonClick = useCallback(() => {
    navigate("/AddProfileWeb");
  }, [navigate]);
  const [lat, setLat] = useState(23.022168903229044);
  const [lng, setLng] = useState(72.54626279296826);
  const [arbitary, setArbitary] = useState({ longitude: 0, latitude: 0 });
  const [coordinates, setCoordinates] = useState([]);
  const [toRender, setToRender] = useState(false);
  const [emerPoints, setEmerPoints] = useState([]);
  const [popupVisible, setpopupVisible] = useState(false);
  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(function (position) {
    //   setLat(position.coords.latitude);
    //   setLng(position.coords.longitude);
    // });

    async function addEmergencyCheck() {
      const checkpointsemer = await axios.get(
        "http://172.16.200.150:3000/fetchemergency/12345/"
      );

      console.log(checkpointsemer);
      setEmerPoints(checkpointsemer.data);
    }
    addEmergencyCheck();
  }, [lng, lat, coordinates]);

  function addMarker(e) {
    let coord = coordinates;
    coord.push([e.lngLat.lng, e.lngLat.lat]);
    setCoordinates(coord);
    setToRender((prevState) => !prevState);
  }
  function togglePopup() {
    setpopupVisible((prev) => !prev);
  }
  function changeArbitary(e) {
    if (coordinates.length) {
      let aux = coordinates;
      console.log(aux);
      aux.pop();
      setCoordinates(aux);
    }
    setArbitary({
      longitude: e.lngLat.lng,
      latitude: e.lngLat.lat,
    });
    addMarker(e);
  }

  function setCheckPoint() {
    // creating an object to send
    let des = document.getElementById("text-area").value;
    let checkpoint = {
      latitude: arbitary.latitude,
      longitude: arbitary.longitude,
      description: des,
    };
    console.log(checkpoint);
    // end point to store this
    let prevEmerCheck = emerPoints;
    prevEmerCheck.push(checkpoint);
    setEmerPoints(prevEmerCheck);
    console.log(emerPoints);
    axios.post("http://172.16.200.150:3000/addemergency/12345", emerPoints);
  }

  function clicked(e) {
    console.log(e);
  }

  function deleteEmergencyPoint(point) {
    let checks = [];
    emerPoints.forEach((ele) => {
      if (
        ele.latitude === point.latitude &&
        ele.longitude === point.longitude
      ) {
      } else checks.push(ele);
    });
    console.log(checks);
    setEmerPoints(checks);
    axios.post("http://172.16.200.150:3000/addemergency/12345", checks);
  }
  // searchLocation()

  function changeFocus(point) {
    setLat(point.latitude);
    setLng(point.longitude);
  }

  return (
    <div className={styles.emercheckWebDiv}>
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
        <img
          className={styles.polygonIcon}
          alt=""
          src="../Pol-removebg-preview.png"
        />
        {/* <img className={styles.polygonIcon} alt="" src="../polygon-1.svg" />
        <img className={styles.polygonIcon2} alt="" src="../polygon-3.svg" />
        <img className={styles.polygonIcon3} alt="" src="../polygon-4.svg" />
        <div className={styles.aANKHDiv}>AANKH</div>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-6.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-5.svg" /> */}
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
        sx={{ width: 180 }}
        variant="text"
        color="secondary"
        href="/Report"
        onClick={onTrackNowButtonClick}
      >
        Generate Report
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
      <div className={styles.emerCheckDiv}>Emer-Check</div>
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
      {/* <img
        className={styles.icons9CheckpointGoalFlagFo}
        alt=""
        src="../icons8profile32-1@2x.png"
      />
      <Button
        className={styles.logoutButton}
        sx={{ width: 157 }}
        variant="text"
        color="secondary"
        href="/report"
      >
        Generate Report
      </Button> */}
      <img
        className={styles.icons8Profile321}
        alt=""
        src="../icons8profile32-1@2x.png"
      />
      <img
        className={styles.groupIcon1}
        alt=""
        src="../Delhi_Police_Logo.png"
      />
      (lng &&{" "}
      <div className={styles.contaimer}>
        <Map
          id="my-map"
          mapboxAccessToken="pk.eyJ1IjoiZ2FudGhlci03NyIsImEiOiJjbDloeXI4dWwwa2swM3ZvMDM0ZDN0emR5In0.3EWcLIvaQ9-yd6cjJQq5cQ"
          initialViewState={{
            longitude: lng,
            latitude: lat,
            zoom: 12,
            center: [lng, lat],
          }}
          style={{
            width: "800px",
            height: "700px",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: 30,
            left: 290,
          }}
          onClick={(e) => changeArbitary(e)}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
          {(toRender || !toRender) &&
            coordinates.map((ele) => {
              return (
                <Marker
                  onClick={(e) => clicked(e)}
                  longitude={ele[0]}
                  latitude={ele[1]}
                />
              );
            })}
          {emerPoints &&
            emerPoints.map((ele, key) => {
              return (
                <Marker
                  longitude={ele.longitude}
                  latitude={ele.latitude}
                  color="red"
                  key={key}
                  onClick={togglePopup}
                />
              );
            })}
        </Map>

        <div className={styles.locationbox}>
          <div className={styles.heading}>Add Emergency Chechkpoint</div>
          <div className={styles.coordinates}>
            <div className={styles.coord}>longitude: {arbitary.longitude}</div>
            <div className={styles.coord}>latitude: {arbitary.latitude}</div>
          </div>
          <div className="desciption">
            <textarea name="" id="text-area" cols="20" rows="5"></textarea>
          </div>
          <button
            className={styles.createCheckPoint}
            onClick={(e) => setCheckPoint()}
          >
            Create Checkpoint
          </button>
          <div className={styles.checkpoint}>
            <div>Emergency checkpoints</div>
            {emerPoints &&
              emerPoints.map((ele, ind) => {
                return (
                  <div key={ind} className={styles.cell}>
                    <div
                      onClick={(e) => changeFocus(ele)}
                      className={styles.descbutton}
                    >
                      {ele.description}
                    </div>
                    <button onClick={(e) => deleteEmergencyPoint(ele)}>
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmercheckWeb;
