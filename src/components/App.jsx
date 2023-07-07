import React from "react";
import PlacesToVisit from "./Places_To_Visit";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./Home_Page";

function App() {
  return (
    <>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/placestovisit" element={<PlacesToVisit/>}/>
        </Routes>
  </>
  );
}

export default App;
