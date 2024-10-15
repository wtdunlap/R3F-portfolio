/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import {
    useTexture,
    MeshPortalMaterial,
    CameraControls,
    OrbitControls,
} from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, Scanline } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export default function PortalCard({ children, texture, ...props }) {
    const map = useTexture(texture);
    const sphereRef = useRef();
    const controlsRef = useRef();
    const planeRef = useRef();

    const [positions, setPositions] = useState([]);

    // Initialize the rectangle's vertex positions
    useEffect(() => {
        const initialPositions = [
            [-2.75, -3.5, 0], // Bottom left
            [2.75, -3.5, 0], // Bottom right
            [-2.75, 3.5, 0], // Top left
            [2.75, 3.5, 0], // Top right
        ].flat();

        setPositions(initialPositions);
    }, []);

    useFrame((state, delta) => {
        sphereRef.current.rotation.x += delta;
        sphereRef.current.rotation.y += 0.001;

        const time = state.clock.getElapsedTime();
        const amplitude = 0.15; // Depth of the oscillation
        const speed = 0.75; // Speed of the oscillation

        const newPositions = positions.map((value, index) => {
            // Raise and lower based on the index (Z coordinate)
            if (index % 3 === 2) {
                // Z coordinate
                return (
                    value +
                    amplitude * Math.sin(time * speed + (index * Math.PI) / 2)
                );
            }
            return value;
        });

        planeRef.current.geometry.attributes.position.array.set(
            new Float32Array(newPositions)
        );
        planeRef.current.geometry.attributes.position.needsUpdate = true; // Update the geometry
    });

    return (
        <group {...props}>
            <EffectComposer>
                <Scanline
                    blendFunction={BlendFunction.OVERLAY} // blend mode
                    density={2.3} // scanline density
                />
                <mesh ref={planeRef}>
                    <planeGeometry args={[5.5, 7]} />
                    <MeshPortalMaterial side={THREE.DoubleSide}>
                        <OrbitControls
                            ref={controlsRef}
                            enableZoom={false}
                            enableRotate={false}
                            enablePan={false}
                            maxPolarAngle={Math.PI / 2}
                            minPolarAngle={Math.PI / 2}
                        />
                        <ambientLight intensity={0.5} />
                        {children}
                        <mesh ref={sphereRef}>
                            <sphereGeometry args={[5, 32, 32]} />
                            <meshStandardMaterial
                                map={map}
                                side={THREE.BackSide}
                            />
                        </mesh>
                    </MeshPortalMaterial>
                </mesh>
            </EffectComposer>
        </group>
    );
}
