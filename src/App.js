import React from "react";
import "./App.css";
import ProfilPhoto from "./Component/Profile/ProfilPhoto";
import FullName from "./Component/Profile/FullName";
import Address from "./Component/Profile/Address";

function App() {
  return (
    <>
      <div className="App">
        <h1>My Profile</h1>

        <ProfilPhoto />
        <FullName />
        <Address />
      </div>
    </>
  );
}

export default App;
