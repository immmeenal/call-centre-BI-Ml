import React from "react";
import Centers from "./pages/Centers";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Analytics from "./pages/Analytics";
import KPI from "./pages/kpi";
import Operations from "./pages/Operations";
import Opsliceop from "./pages/Opsliceop";
import OpPivot from "./pages/OpPivot";
import Oprollup from "./pages/Oprollup";
import Opdrilldown from "./pages/Opdrilldown";
import Opdice from "./pages/Opdice";
import "bootstrap/dist/css/bootstrap.min.css";
import Powerbi from "./pages/Powerbi";
import Ml from "./pages/Ml";
import StarSchema from "./pages/StarSchema";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Centers />}></Route>
          <Route path="/analytics" element={<Analytics />}></Route>
          <Route path="/kpi" element={<KPI />}></Route>
          <Route path="/operations" element={<Operations />}></Route>
          <Route path="/opsliceop" element={<Opsliceop />}></Route>
          <Route path="/oppivot" element={<OpPivot />}></Route>
          <Route path="/oprollup" element={<Oprollup />}></Route>
          <Route path="/opdrilldown" element={<Opdrilldown />}></Route>
          <Route path="/opdice" element={<Opdice />}></Route>
          <Route path="/powerbi" element={<Powerbi />}></Route>
          <Route path="/ml" element={<Ml />}></Route>
          <Route path="/star" element={<StarSchema />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
