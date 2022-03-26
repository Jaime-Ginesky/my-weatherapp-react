import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Search from "./Search";
import Temperature from "./Temperature";
import Conditions from "./Conditions";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <div className="section">
          <Search />
          <div className="title">
            <h1 id="city">
              <strong>South Pasadena</strong>
            </h1>
            <h2>Wednesday March 2, 2022 17:41</h2>
          </div>
          <Temperature value={68} />
          <Conditions humidity={40} wind={0} feels_like={60} pressure={26} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
