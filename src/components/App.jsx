import React from "react";
import "../styles/App.css";
import Info from "./Gallery/Info";
import Header from "./Header/Header";
import Roadmap from "./Roadmap/Roadmap";

function App() {
  return (
    <div>
      <Header />
      <Info />
      <Roadmap />
    </div>
  );
}

export default App;
