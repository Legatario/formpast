import React from "react";
import FormWithHOC from "./components/form/FormWithHOC";
import Classes from "./components/class/Classes";
import "./App.css"




const App = () => {

  return (
    <div className="container">
      <FormWithHOC />
      <Classes />
    </div>
  );
};

export default App