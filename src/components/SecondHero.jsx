import React from "react";
import Spline from "@splinetool/react-spline";

export default function SecondHero() {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden bg-black">
      <div className="flex justify-center items-center">
        <Spline
          scene="https://prod.spline.design/3rqdiVaKM5P-bXxV/scene.splinecode"
          style={{ width: "1200px", height: "1200px" }}
        />
      </div>
    </div>
  );
}
