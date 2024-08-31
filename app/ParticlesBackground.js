"use client";

import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

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
      color: {
        value: ["#7289DA", "#43B581", "#FAA61A", "#ffffff"],
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
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
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80, // Increase particle count for better visibility
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: ["circle", "triangle", "polygon"],
      },
      size: {
        value: { min: 2, max: 5 },
      },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
};

export default ParticlesBackground;
