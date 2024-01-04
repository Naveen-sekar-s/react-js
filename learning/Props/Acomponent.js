import React from "react";
import Bcomponent from "./Bcomponent";

const Acomponent = () => {
  let empid = 101;
  let empname = "Madhu";
  let empsal = 55000;
  let emploc = "Salem";

  return (
    <main>
      <br />
      <br />
      <hr />
      <h1>A-component</h1>
      <h3>{empid}</h3>
      <h3>{empname}</h3>
      <h3>{empsal}</h3>
      <h3>{emploc}</h3>
      <hr />
      <Bcomponent prop1={empid} prop2={empname} prop3={empsal} prop4={emploc} />
    </main>
  );
};

export default Acomponent;
