import React, { useEffect } from "react";
import CompC from "./CompC";
import { useGlobalContext } from "../context/context";

const CompB = () => {
  const { updateName, updateAge } = useGlobalContext();
  useEffect(() => {
    updateName("Mustafa Name Updated");
    updateAge("Mustafa Age Updated");
  }, []);
  return (
    <div>
      <CompC />
      This is COMPONENT_B
    </div>
  );
};

export default CompB;
