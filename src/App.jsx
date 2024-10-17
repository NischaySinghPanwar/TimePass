import { useState } from "react";
import Nobtn from "./Nobtn";
import "./App.css";
import ScondNObtn from "./ScondNObtn";
import Yesbtn from "./Yesbtn";
import Spline from '@splinetool/react-spline';
function App() {

  return (
    
    <div className="relative w-full h-screen">
    <Spline
        scene="https://prod.spline.design/iHOcdVql8AlgsAwj/scene.splinecode"
        className="absolute inset-0 -z-10" // Position Spline in the background
    />
    <div className="flex items-center justify-center ">
        <h1 className="text-5xl mt-10 text-zinc-600">DO YOU LOVE ME?</h1>
    </div>
    <div className="flex items-center justify-center m-20 gap-20">
        <Yesbtn />
        <Nobtn />
        <ScondNObtn />
    </div>
</div>
  );
}

export default App;
