import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Icosahedron, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Icosahedron ref={meshRef} args={[1.35, 1]}>
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#0e7490"
          emissiveIntensity={0.45}
          roughness={0.15}
          metalness={0.85}
          distort={0.35}
          speed={1.8}
        />
      </Icosahedron>
      {/* Wireframe outer shell */}
      <Icosahedron args={[1.85, 1]}>
        <meshBasicMaterial color="#a855f7" wireframe transparent opacity={0.25} />
      </Icosahedron>
    </Float>
  );
}

function OrbitingRing() {
  const ringRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    ringRef.current.rotation.x = Math.PI / 2.4;
  });
  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[2.6, 0.015, 16, 120]} />
      <meshBasicMaterial color="#22d3ee" transparent opacity={0.5} />
    </mesh>
  );
}

function Scene() {
  const lights = useMemo(
    () => (
      <>
        <ambientLight intensity={0.35} color="#6ad7ff" />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-5, -3, -4]} intensity={2.2} color="#a855f7" />
        <pointLight position={[4, -2, 3]} intensity={1.6} color="#22d3ee" />
      </>
    ),
    [],
  );

  return (
    <>
      {lights}
      <FloatingCore />
      <OrbitingRing />
      <Sparkles count={60} scale={9} size={2.5} speed={0.4} color="#a855f7" opacity={0.6} />
      <Stars
        radius={80}
        depth={50}
        count={3500}
        factor={4}
        saturation={0}
        fade
        speed={0.6}
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <Scene />
    </Canvas>
  );
}
