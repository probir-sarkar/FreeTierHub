"use client";
import React from "react";

const Test = (test) => {
  React.useEffect(() => {
    console.log("Test component mounted");
  }, []);
  console.log(test);
  return <></>;
};

export default Test;
