import React from "react";
import Spline from "@splinetool/react-spline";

export default function MainHero() {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden bg-black">
      <div className="flex justify-center items-center">
        <Spline
          scene="https://prod.spline.design/3QFYULXj6tS1XtF2/scene.splinecode"
          style={{ width: "1200px", height: "1200px" }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center text-center p-4 bg-opacity-50">
        <h1 className="text-4xl font-bold text-white">Product Name</h1>
        <p className="text-xl text-white mt-4">Your subtext or description</p>
        {/* Additional content */}
      </div>
    </div>
  );
}
