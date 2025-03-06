import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group bg-[#1A1A2E] border border-blue-500 hover:bg-blue-500 hover:text-black transition-all duration-300 ease-in-out rounded-lg p-4 shadow-md shadow-blue-900">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar bg-blue-500 h-1 w-full mt-2" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800 text-blue-400">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-black transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
)};



export default WorkExperience;
