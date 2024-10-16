import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import BearPoint from "./BearPoint.jsx";
import PortalCard from "./PortalCard.jsx";
import { Stats } from "@react-three/drei";
import Loader from "./Loader.jsx";

const ContactMe = () => {
    return (
        <div className="text-white h-screen">
            <h1 className="text-2xl text-center m-10">
                Contact <a className="text-pink-600 pinkAfterglow">Bear</a>
            </h1>
            <div className="flex flex-col h-4/5 items-center">
                <p className=" mx-10 w-72 justify-center ">
                    This is where you can find me! I'm on{" "}
                    <a
                        className="text-pink-600 pinkAfterglow"
                        href="https://www.linkedin.com/in/wesley-d-a70341272/"
                    >
                        LinkedIn
                    </a>{" "}
                    with some examples on{" "}
                    <a
                        className="text-pink-600 pinkAfterglow"
                        href="https://github.com/wtdunlap"
                    >
                        GitHub
                    </a>
                    . I can provide more detailed or specific examples upon
                    request, along with college transcripts if needed
                </p>
                <Canvas className="">
                    <Suspense fallback={<Loader />}>
                        <PortalCard texture={"./textures/serverBox.png"} insetText={"Work With Me!"}>
                            <BearPoint scale={2.5} position={[0, -2.5, 0]} />
                        </PortalCard>
                    </Suspense>
                    <Stats />
                </Canvas>
            </div>
        </div>
    );
};

export default ContactMe;
