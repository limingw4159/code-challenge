import React from "react";
import "./App.css";
import ServiceList from "./components/ServiceList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Huddo Boards Services</h1>
        <ServiceList />
      </header>
    </div>
  );
}

export default App;
