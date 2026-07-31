import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const CameraLight = () => {
  const lightRef = useRef();
  useFrame(({ camera }) => {
    if (lightRef.current) {
      // Offset the light to be top-left relative to where the camera is
      const offset = new THREE.Vector3(-5, 5, 2);
      offset.applyQuaternion(camera.quaternion);
      lightRef.current.position.copy(camera.position).add(offset);
    }
  });
  return <pointLight ref={lightRef} intensity={200} distance={100} color="#ffffff" />;
};

const AbstractShape = () => {
  const groupRef = useRef();

  const pointsCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(pointsCount * 3);
    for (let i = 0; i < pointsCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = 2.5;
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.1;
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef}>
        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" count={pointsCount} array={positions} itemSize={3} />
          </bufferGeometry>
          <pointsMaterial color="#8b6b23" size={0.03} sizeAttenuation={true} transparent={true} opacity={0.6} />
        </points>
        <mesh>
          <icosahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial 
            color="#5b2c6f" 
            roughness={0.1} 
            metalness={0.9} 
            emissive="#2a0a3a" 
            emissiveIntensity={0.5} 
          />
        </mesh>
      </group>
    </Float>
  );
};

const Hero3DModel = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* Iluminación base ambiental realista */}
        <Environment preset="city" environmentIntensity={0.3} />
        
        {/* Luz que siempre sigue a la cámara desde la izquierda superior */}
        <CameraLight />
        
        <AbstractShape />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2 + 0.3}
          minPolarAngle={Math.PI / 2 - 0.3}
        />
      </Canvas>
    </div>
  );
};

export default Hero3DModel;
