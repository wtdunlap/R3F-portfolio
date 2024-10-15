import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import BearDab from "./BearDab.jsx";
import PortalCard from "./PortalCard.jsx";
import { Stats } from "@react-three/drei";
import Loader from "./Loader.jsx";

const AboutMe = () => {
    return (
        <div className="text-white h-screen">
            <h1 className="text-2xl text-center m-10">
                About <a className="text-pink-600 pinkAfterglow">Bear</a>
            </h1>
            <div className="flex flex-col h-4/5 items-center">
                <p className=" mx-10 w-72 justify-center ">
                    This is a short paragraph about how I am currently me! I
                    went to school for IT, studied for and passed a bunch of
                    classes, even did a coding bootcamp, maintained the A/B
                    honor roll almost the entire duration of my college
                    experience. I am a quick learner and a hard worker.
                </p>
                <Canvas className="">
                    <Suspense fallback={<Loader />}>
                        <PortalCard
                            texture={"./textures/consoleBox.png"}
                            insetText={"See What I'm About!"}
                        >
                            <BearDab scale={2.5} position={[0, -2.5, 0]} />
                        </PortalCard>
                    </Suspense>
                    <Stats />
                </Canvas>
            </div>
        </div>
    );
};

export default AboutMe;
