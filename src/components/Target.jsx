import { useGLTF } from '@react-three/drei';
import { useRef, useEffect, useMemo } from 'react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf'
  );

  // ✅ Memoize scene to prevent unnecessary updates
  const clonedScene = useMemo(() => (scene ? scene.clone() : null), [scene]);

  useEffect(() => {
    if (clonedScene && targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: '+=0.5',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut', // ✅ Smooth animation
      });
    }
  }, [clonedScene]);

  if (!clonedScene) return null; // ✅ Prevent rendering before model is ready

  return (
    <group {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={clonedScene} />
    </group>
  );
};

// ✅ Preload model for better performance
useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

export default Target;
