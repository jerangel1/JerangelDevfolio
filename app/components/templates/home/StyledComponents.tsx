import styled from "styled-components";

 export const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,
    #000000 0%,
    #000000 30%,
    #000022 50%,
    rgba(0, 0, 102, 0.6) 70%,
    rgba(0, 0, 139, 0.4) 85%,
    rgba(0, 0, 139, 0.2) 100%
  );
`;

export const SpaceFog = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.9) 30%,
    rgba(0, 0, 51, 0.5) 60%,
    rgba(0, 0, 102, 0.3) 100%
  );
  backdrop-filter: blur(12px);
`;

export const ParticleContainer = styled.div`
  position: absolute;
  inset: 0;
  mask-image: linear-gradient(to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0) 90%
  );
`;

export const Earth = styled.div`
  position: absolute;
  inset: 0;
  top: 450px;
  left: 1080px;
  right: -200px;
  background-image: url('/FondoTierra.webp');
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: cover;
  filter: contrast(1.1) brightness(1.1) drop-shadow(0 0 150px rgba(0, 149, 255, 0.5));
  animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  z-index: 1;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    inset: auto;
    top: auto;
    bottom: 0;
    left: 50%;
    right: auto;
    width: 200vw; /* Hacemos la imagen más ancha */
    height: 45vh;
    transform: translateX(-50%); /* Centramos horizontalmente */
    background-position: top center;
    background-size: cover;
  }
`;

export const EarthHalo = styled.div`
  position: absolute;
  inset: 0;
  top: 450px;
  left: 980px;
  right: -100px;
  background: radial-gradient(
    circle at bottom right,
    rgba(0, 149, 255, 0.3) 0%,
    rgba(0, 98, 255, 0.2) 20%,
    rgba(0, 47, 167, 0.1) 40%,
    transparent 70%
  );
  filter: blur(40px);
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at bottom right,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 60%
    );
    filter: blur(30px);
  }

  @media (max-width: 768px) {
    inset: auto;
    top: auto;
    bottom: 0;
    left: 50%;
    right: auto;
    width: 200vw;
    height: 45vh;
    transform: translateX(-50%);
    background: radial-gradient(
      circle at center top,
      rgba(0, 149, 255, 0.3) 0%,
      rgba(0, 98, 255, 0.2) 20%,
      rgba(0, 47, 167, 0.1) 40%,
      transparent 70%
    );
  }
`;