import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'

const GradientSphere = ({ position, scale }: { position: [number, number, number]; scale: number }) => {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.15
    ref.current.rotation.y += delta * 0.2
  })
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 3]} />
        <MeshDistortMaterial
          color="#b06eff"
          emissive="#6b2fa0"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  )
}

const GradientTorus = ({ position, scale }: { position: [number, number, number]; scale: number }) => {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.3
    ref.current.rotation.z += delta * 0.15
  })
  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[1, 0.4, 32, 64]} />
        <MeshWobbleMaterial
          color="#ff6b6b"
          emissive="#a03030"
          emissiveIntensity={0.4}
          roughness={0.25}
          metalness={0.7}
          factor={0.15}
          speed={1.5}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  )
}

const GradientOctahedron = ({ position, scale }: { position: [number, number, number]; scale: number }) => {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.25
    ref.current.rotation.z += delta * 0.1
  })
  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#4c1d95"
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.9}
          transparent
          opacity={0.75}
          wireframe
        />
      </mesh>
    </Float>
  )
}

const FloatingCube = ({ position, scale }: { position: [number, number, number]; scale: number }) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const groupRef = useRef<THREE.Group>(null!)

  const edges = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1)), [])

  useFrame((_, delta) => {
    groupRef.current.rotation.x += delta * 0.2
    groupRef.current.rotation.y += delta * 0.35
  })

  return (
    <Float speed={2.2} rotationIntensity={0.3} floatIntensity={1.4}>
      <group ref={groupRef} position={position} scale={scale}>
        <mesh ref={meshRef}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#b06eff"
            emissive="#6b2fa0"
            emissiveIntensity={0.3}
            roughness={0.3}
            metalness={0.8}
            transparent
            opacity={0.25}
          />
        </mesh>
        <lineSegments geometry={edges}>
          <lineBasicMaterial color="#b06eff" transparent opacity={0.6} />
        </lineSegments>
      </group>
    </Float>
  )
}

const Particles = () => {
  const count = 60
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6
    }
    return pos
  }, [])

  const ref = useRef<THREE.Points>(null!)
  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#b06eff" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

const Scene = () => (
  <>
    <ambientLight intensity={0.3} />
    <pointLight position={[3, 3, 3]} intensity={1.2} color="#b06eff" />
    <pointLight position={[-3, -2, 2]} intensity={0.8} color="#ff6b6b" />
    <pointLight position={[0, 4, -3]} intensity={0.5} color="#7c3aed" />

    <GradientSphere position={[0, 0.3, 0]} scale={1.3} />
    <GradientTorus position={[2.2, -0.8, -1]} scale={0.7} />
    <GradientOctahedron position={[-2, 1.2, -0.5]} scale={0.8} />
    <FloatingCube position={[1.8, 1.5, -1.5]} scale={0.55} />
    <FloatingCube position={[-1.5, -1.3, 0.5]} scale={0.4} />
    <Particles />
  </>
)

const Hero3DScene = () => (
  <div className="w-full h-full" style={{ minHeight: 320 }}>
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Scene />
    </Canvas>
  </div>
)

export default Hero3DScene
