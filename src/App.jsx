/* eslint-disable react/no-unknown-property */

import AboutMe from "./assets/AboutMe.jsx";
import ContactMe from "./assets/ContactMe.jsx";
import Intro from "./assets/Intro.jsx";

import { Stats } from "@react-three/drei";

function App() {
    return (
        <>
            <Intro />
            <AboutMe />
            <ContactMe />
            <Stats />
        </>
    );
}

export default App;
