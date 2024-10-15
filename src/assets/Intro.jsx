/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import BearSurprise from "./BearSurprise.jsx";
import PortalCard from "./PortalCard.jsx";

const Intro = () => {
    return (
        <div className="text-white h-screen justify-center content-center">
            <h1 className="text-2xl text-center m-10">
                Welcome to <a className="text-pink-600 pinkAfterglow">Bear</a>!
            </h1>
            <div className="flex flex-col h-4/5 items-center w-screen ">
                <p className="   mx-10 w-72">
                    This is a short paragraph about how cool I am! I have worked
                    on a bunch of different things and used a ton of different
                    technologies to make all kinds of cool stuff. From basic
                    websites to full MERN stack deployments and even some{" "}
                    <a
                        className="text-pink-600 pinkAfterglow"
                        href="https://phaser-punch-buggy.onrender.com/"
                    >
                        video games
                    </a>
                </p>
                <Canvas className="">
                    <Suspense fallback={null}>
                        <PortalCard texture={"./textures/monitorBox.png"}>
                            <BearSurprise scale={2.5} position={[0, -2.5, 0]} />
                        </PortalCard>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
};

export default Intro;
