"use client";
import React, { useEffect } from "react";

const AboutError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    //-----Ew can pass the error to a logger
    console.log(error);
  }, []);
  return (
    <div>
        <h1>Something Went: Plese Tray agan </h1>
        <button onClick={() => reset()}>Retry</button>
    </div>
  );
};

export default AboutError;
