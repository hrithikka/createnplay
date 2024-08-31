"use client";

import React, { useState, useEffect } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Image from 'next/image';
import YourImage1 from '../img1.jpg';  
import YourImage2 from '../img2.jpg'; 
import YourImage3 from '../img3.jpg'; 
import Logo from '../image.jpg'; 

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800,
        },
      },
      shape: {
        type: "char",
        character: {
          value: ["🎮", "🎲", "🎯", "🏆", "🕹️", "👾", "🧩", "🎴", "♟️", "🏅", "🔮", "💥", "🪄", "🎤", "📜"], 
          font: "Verdana",
          style: "",
          weight: "400",
        },
      },
      color: {
        value: ["#5865F2", "#7289DA", "#99AAB5", "#ffffff"], 
      },
      opacity: {
        value: 0.8,
      },
      size: {
        value: { min: 20, max: 40 },
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 2,
        straight: false,
      },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
};

const Slideshow = () => {
  const images = [YourImage1, YourImage2, YourImage3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="slideshow" className="relative w-full h-[60vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={images[currentImageIndex]}
          alt="Slideshow"
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
};

const WelcomeSection = () => (
  <section id="welcome" className="flex flex-col items-center justify-center text-center py-12 bg-gray-900">
    <Image 
      src={Logo} 
      alt="Logo" 
      width={80} 
      height={80} 
      className="animate-bounce mb-4" 
    />
    <h1 className="text-4xl font-bold">Welcome to Create'n'Play</h1>
    <p className="mt-4 text-lg">Your ultimate gaming companion.</p>
  </section>
);

const Features = () => (
  <section id="features" className="min-h-screen py-12 bg-gray-900">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="feature-item bg-gray-800 p-6 rounded-lg shadow-lg text-white">
          <h3 className="text-2xl font-semibold">Feature 1</h3>
          <p className="mt-2">Description of Feature 1.</p>
        </div>
        <div className="feature-item bg-gray-800 p-6 rounded-lg shadow-lg text-white">
          <h3 className="text-2xl font-semibold">Feature 2</h3>
          <p className="mt-2">Description of Feature 2.</p>
        </div>
        <div className="feature-item bg-gray-800 p-6 rounded-lg shadow-lg text-white">
          <h3 className="text-2xl font-semibold">Feature 3</h3>
          <p className="mt-2">Description of Feature 3.</p>
        </div>
      </div>
    </div>
  </section>
);

const GetStarted = () => (
  <section id="get-started" className="min-h-screen flex items-center justify-center bg-gray-900 py-12">
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4">Get Started</h2>
      <p className="text-lg mb-6">Begin your journey with Create'n'Play now.</p>
      <button 
        className="bg-indigo-700 text-white px-6 py-3 rounded-full hover:bg-indigo-600 transition-colors duration-300" 
        onClick={() => window.location.href = 'https://discord.com/oauth2/authorize?client_id=1238491878580817930'}
      >
        Start Now
      </button>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 py-12">
    <div className="max-w-2xl text-center text-white">
      <h2 className="text-4xl font-bold mb-4">About Us</h2>
      <p className="text-lg">
        We are passionate about creating an engaging and entertaining gaming experience. Our mission is to provide you with the tools and resources you need to have fun and stay connected.
      </p>
    </div>
  </section>
);

const HomePage = () => {
  return (
    <>
      <ParticlesBackground />
      <Slideshow />
      <WelcomeSection />
      <Features />
      <GetStarted />
      <About />
    </>
  );
};

export default HomePage;
