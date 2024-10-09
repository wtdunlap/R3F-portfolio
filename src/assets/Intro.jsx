import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import BearSurprise from "./BearSurprise.jsx";
import { OrbitControls } from "@react-three/drei";

const Intro = () => {
    return (
        <div className="text-white h-screen">
            <h1 className="text-2xl text-center m-10">Welcome to <a className="text-pink-600">Bear</a>!</h1>
            <div className="flex flex-col h-4/5">
                <p className="mx-10">
                    This is a short paragraph about how cool I am! I have worked
                    on a bunch of different things and used a ton of different
                    technologies to make all kinds of cool stuff. From basic
                    websites to full MERN stack deployments and even some video
                    games
                </p>
                <Canvas className="">
                    <Suspense fallback={null}>
                        <BearSurprise scale={2.5} position={[0, -2.5, 0]} />
                        <OrbitControls enableZoom={false} />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
};

export default Intro;
