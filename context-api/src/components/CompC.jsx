import React from "react";
import { useGlobalContext } from "../context/context";

const CompC = () => {
  const globalState = useGlobalContext();
  console.log(globalState);
  return <div>This is COMPONENT_C</div>;
};

export default CompC;
