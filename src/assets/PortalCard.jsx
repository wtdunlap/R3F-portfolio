/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import {
    useTexture,
    MeshPortalMaterial,
    OrbitControls,
    Text,
} from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, Scanline } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export default function PortalCard({ children, texture, insetText, ...props }) {
    const map = useTexture(texture);
    const sphereRef = useRef();
    const controlsRef = useRef();
    const planeRef = useRef();
    const portalRef = useRef();

    const [portalPositions, setPortalPositions] = useState([]);

    useEffect(() => {
        const initialPortalPositions = [
            [-2.5, -3.5, 0], // Bottom left
            [2.5, -3.5, 0], // Bottom right
            [-2.5, 3.5, 0], // Top left
            [2.5, 3.5, 0], // Top right
        ].flat();

        setPortalPositions(initialPortalPositions);
    }, []);

    useFrame((state) => {
        sphereRef.current.rotation.x += 0.01;
        sphereRef.current.rotation.y += 0.001;

        const time = state.clock.getElapsedTime();
        const amplitude = 0.175; // Depth of the oscillation
        const speed = 0.75; // Speed of the oscillation

        const newPortalPositions = portalPositions.map((value, index) => {
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
            new Float32Array(newPortalPositions)
        );
        planeRef.current.geometry.attributes.position.needsUpdate = true;
    });

    return (
        <group {...props}>
            <EffectComposer>
                <Scanline
                    blendFunction={BlendFunction.OVERLAY} // blend mode
                    density={2.3} // scanline density
                />
                <OrbitControls
                    enablePan={false}
                    enableRotate={false}
                    enableZoom={false}
                    ref={controlsRef}
                />
                <mesh ref={planeRef}>
                    <Text
                        fontSize={0.3}
                        position={[0, -2.75, 1]}
                        anchorY={"bottom"}
                    >
                        {insetText}
                    </Text>
                    <planeGeometry args={[5.5, 7]} />
                    <MeshPortalMaterial
                        side={THREE.DoubleSide}
                        ref={portalRef}
                    >
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
