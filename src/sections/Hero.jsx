import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';
import { Leva } from 'leva';
import { motion } from 'framer-motion';

import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { HackerRoom } from '../components/HackerRoom.jsx';
import { calculateSizes } from '../constants/index.js';

const Hero = () => {
  // Media queries for responsiveness
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // Calculate responsive sizes
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section id="home" className="relative flex flex-col min-h-screen w-full bg-gradient-to-b from-[#0D0D0D] to-[#1A1A2E]">
      {/* Hero Text with Smooth Entrance */}
      <motion.div 
        className="relative z-10 mx-auto mt-20 sm:mt-36 flex flex-col gap-3 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-xl sm:text-3xl font-medium text-blue-400 font-generalsans">
          Hi, I am <span className="text-indigo-500">Mayank</span> <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-blue-300">
          Engineering Responsive Web Solutions
        </p>
      </motion.div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* Hide UI Controls */}
            <Leva hidden />

            {/* Camera */}
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>

            {/* 3D Elements */}
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
            </group>

            {/* Lighting */}
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 0]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* CTA Button - Now More Engaging */}
      <motion.div 
        className="absolute bottom-7 left-0 right-0 w-full z-10 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <a href="#about" className="w-fit">
          <Button 
            name="Let's work together 🚀" 
            isBeam 
            containerClass="w-full sm:w-fit sm:min-w-96 bg-gradient-to-r from-blue-600 to-indigo-500 hover:scale-105 transition-transform duration-300"
          />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
