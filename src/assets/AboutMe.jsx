import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import BearPoint from "./BearPoint.jsx";

const AboutMe = () => {
    return (
        <div className="text-white h-screen">
            <h1 className="text-2xl text-center m-10">About <a className="text-pink-600">Bear</a></h1>
            <div className="flex flex-col h-4/5">
            <p className=" mx-10">
                    This is a short paragraph about how I am currently me! I
                    went to school and studied and passed a bunch of classes, even did a coding bootcamp, and
                    now I am here. I maintained the A/B honor roll almost
                    the entire duration of my college experience. I am a quick
                    learner. I work hard. What's not to love?
                </p>
                <Canvas className="">
                    <Suspense fallback={null}>
                        <BearPoint scale={2.5} position={[0, -2.5, 0]} />
                        <OrbitControls enableZoom={false} />
                    </Suspense>
                </Canvas>
                
            </div>
        </div>
    );
};

export default AboutMe;
