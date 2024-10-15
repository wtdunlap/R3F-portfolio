import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import BearDab from "./BearDab.jsx";
import PortalCard from "./PortalCard.jsx";

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
                    experience. I am a quick learner. I work hard. What's not to
                    love?
                </p>
                <Canvas className="">
                    <Suspense fallback={null}>
                        <PortalCard texture={"./textures/consoleBox.png"}>
                            <BearDab scale={2.5} position={[0, -2.5, 0]} />
                        </PortalCard>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
};

export default AboutMe;
