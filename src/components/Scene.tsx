"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function CenterShape() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={meshRef} scale={1.6}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#7c3aed"
          attach="material"
          distort={0.35}
          speed={1.5}
          roughness={0.2}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
}

function OrbitingShape({
  radius,
  speed,
  color,
  size,
}: {
  radius: number;
  speed: number;
  color: string;
  size: number;
}) {
  const groupRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime() * speed;
    groupRef.current.position.x = Math.cos(t) * radius;
    groupRef.current.position.z = Math.sin(t) * radius;
    groupRef.current.position.y = Math.sin(t * 1.5) * 0.6;
    groupRef.current.rotation.x += 0.01;
    groupRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={groupRef}>
      <octahedronGeometry args={[size, 0]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.4} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#a78bfa" />
        <pointLight position={[-5, -3, -5]} intensity={0.8} color="#22d3ee" />

        <Stars radius={60} depth={40} count={2000} factor={2} saturation={0} fade speed={0.5} />

        <CenterShape />
        <OrbitingShape radius={3} speed={0.4} color="#22d3ee" size={0.28} />
        <OrbitingShape radius={3.6} speed={-0.3} color="#f472b6" size={0.2} />
        <OrbitingShape radius={2.4} speed={0.6} color="#facc15" size={0.16} />
      </Canvas>
    </div>
  );
}
