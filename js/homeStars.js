// tsParticles configuration for the stars background in the home section

// tsParticles configuration for the stars background in the home section

document.addEventListener('DOMContentLoaded', () => {
    tsParticles.load('home-stars', {
      fpsLimit: 60,
      fullScreen: { enable: false },
      background: { color: 'transparent' },
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            area: 800
          }
        },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: {
          value: { min: 0.3, max: 1 },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.3,
            sync: false
          }
        },
        size: {
          value: { min: 1, max: 2 },
          random: { enable: true }
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'out' }
        }
      }
    });
  });
  