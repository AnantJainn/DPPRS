import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomedashboardWeb from "./pages/HomedashboardWeb";
import OfficerAnalysisWeb from "./pages/OfficerAnalysisWeb";
import OfficerAnalysisWeb2 from "./pages/OfficerAnalysisWeb2";
import EmercheckWeb from "./pages/EmercheckWeb";
import AddProfileWeb from "./pages/AddProfileWeb";
import TracknowWeb from "./pages/TracknowWeb";
import TracknowWebMap from "./pages/TracknowWebMap";
import SubmittedWeb from "./pages/SubmittedWeb";
import Login from "./pages/Login";
import MapBox from "./pages/MapBox";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    //TODO: Update meta titles and descriptions below
    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
       <Route path="/" element ={<HomedashboardWeb />}/> 
      <Route path="/HomedashboardWeb" element={<HomedashboardWeb />} />
      <Route path="/OfficerAnalysisWeb" element={<OfficerAnalysisWeb />} />
      <Route path="/OfficerAnalysisWeb2" element={<OfficerAnalysisWeb2 />} />
      <Route path="/EmercheckWeb" element={<EmercheckWeb />} />
      <Route path="/AddProfileWeb" element={<AddProfileWeb />} />
      <Route path="/TracknowWeb" element={<TracknowWeb />} />
      <Route path="/TracknowWebMap" element={<TracknowWebMap />} />
      <Route path="/SubmittedWeb" element={<SubmittedWeb />} />
      <Route path="/MapBox" element={<MapBox />} />
      {/* <Route path="/" element ={<Login />}/> */}
    </Routes>
  );
}
export default App;
