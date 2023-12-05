import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import RoutesComponent from "./components/routes";
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            {RoutesComponent.map((route) => (
              <Route
                path={route.path}
                element={<route.page />}
                key={route.path}
              />
            ))}
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
