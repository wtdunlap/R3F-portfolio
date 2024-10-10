
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import BearDab from "./BearDab.jsx";

const ContactMe = () => {
    return (
        <div className="text-white h-screen">
            <h1 className="text-2xl text-center m-10">
                Contact <a className="text-pink-600">Bear</a>
            </h1>
            <div className="flex flex-col h-4/5 items-center">
            <p className=" mx-10 w-72 justify-center ">
                    This is where you can find me! I'm on{" "}
                    <a
                        className="text-pink-600"
                        href="https://www.linkedin.com/in/wesley-d-a70341272/"
                    >
                        LinkedIn
                    </a>{" "}
                    with some examples on{" "}
                    <a
                        className="text-pink-600"
                        href="https://github.com/wtdunlap"
                    >
                        GitHub
                    </a>
                    . I can provide more detailed or specific examples upon
                    request, along with college transcripts if needed
                </p>
                <Canvas className="">
                    <Suspense fallback={null}>
                        <BearDab scale={2.5} position={[0, -2.5, 0]} />
                        
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
};

export default ContactMe;
