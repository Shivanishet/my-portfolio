import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles, Float } from '@react-three/drei';
import * as THREE from 'three';
import photo1 from '../photo/photo1.png';

// 3D background elements for the profile picture
function ProfileScene() {
  const ringRef = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (ringRef.current) {
      ringRef.current.rotation.x = time * 0.2;
      ringRef.current.rotation.y = time * 0.15;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y = -time * 0.25;
      ringRef2.current.rotation.z = time * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[2, 2, 2]} intensity={1.5} color="#22d3ee" />
      <pointLight position={[-2, -2, -2]} intensity={1.5} color="#a855f7" />
      
      {/* Orbiting wireframe shapes around the photo */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={ringRef} position={[0, 0, -1]}>
          <torusGeometry args={[1.6, 0.02, 16, 100]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.4} wireframe />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.6}>
        <mesh ref={ringRef2} position={[0, 0, -1.5]}>
          <octahedronGeometry args={[1.2, 1]} />
          <meshBasicMaterial color="#a855f7" transparent opacity={0.2} wireframe />
        </mesh>
      </Float>

      <Sparkles count={25} scale={3.5} size={2} speed={0.3} color="#22d3ee" opacity={0.6} />
    </>
  );
}

export default function ProfilePhoto() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), { stiffness: 120, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), { stiffness: 120, damping: 20 });
  
  // Glowing effect positions
  const glowX = useSpring(useTransform(x, [-0.5, 0.5], ['60%', '40%']), { stiffness: 120, damping: 20 });
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], ['60%', '40%']), { stiffness: 120, damping: 20 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative flex items-center justify-center w-full max-w-[360px] mx-auto md:max-w-none aspect-square">
      {/* ThreeJS Canvas Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none scale-125">
        <Canvas camera={{ position: [0, 0, 3], fov: 60 }} gl={{ alpha: true }}>
          <ProfileScene />
        </Canvas>
      </div>

      {/* Interactive 3D Card */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative group w-full aspect-square rounded-[28px] cursor-pointer shadow-[0_0_60px_rgba(34,211,238,0.12)]"
      >
        {/* Glow Layer */}
        <motion.div 
          style={{
            left: glowX,
            top: glowY,
            transform: 'translate(-50%, -50%) translateZ(-20px)',
          }}
          className="absolute w-[90%] h-[90%] rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple opacity-40 blur-3xl transition-opacity duration-300 group-hover:opacity-60 pointer-events-none"
        />

        {/* Inner Card Container */}
        <div 
          style={{ transform: 'translateZ(10px)' }}
          className="relative w-full h-full rounded-[24px] p-[2px] bg-gradient-to-tr from-neon-cyan/40 via-slate-900/60 to-neon-purple/40 overflow-hidden shadow-2xl transition-all duration-300 group-hover:shadow-neon-cyan/20 group-hover:border-neon-cyan/50 border border-white/10"
        >
          {/* Photo */}
          <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-space-800">
            <img 
              src={photo1} 
              alt="Shivani Shet Profile" 
              className="w-full h-full object-cover transition-transform duration-500 scale-105 group-hover:scale-100 grayscale-[0.15]"
            />
            {/* Tech Scanlines / overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-space-900/70 via-transparent to-transparent opacity-70 pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_45%)] pointer-events-none" />
            <div className="absolute inset-0 bg-neon-cyan/5 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

          {/* Glowing Corner Accents */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-cyan opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-purple opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-purple opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>
      </motion.div>
    </div>
  );
}
