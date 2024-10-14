/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import {
    useTexture,
    RoundedBox,
    MeshPortalMaterial,
    Environment,
    OrbitControls,
} from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function PortalCard({ children, texture, ...props }) {
    const map = useTexture(texture);
    const sphereRef = useRef();
    const controlsRef = useRef();

    useFrame((state, delta) => {
        sphereRef.current.rotation.x += delta;
    });
    return (
        <group {...props}>
            <RoundedBox args={[5, 7, 0.1]}>
                <MeshPortalMaterial side={THREE.DoubleSide}>
                    <OrbitControls
                        ref={controlsRef}
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                    <ambientLight intensity={0.5} />
                    <Environment preset="sunset" />
                    {children}
                    <mesh ref={sphereRef}>
                        <sphereGeometry args={[5, 32, 32]} />
                        <meshStandardMaterial map={map} side={THREE.BackSide} />
                    </mesh>
                </MeshPortalMaterial>
            </RoundedBox>
        </group>
    );
}
