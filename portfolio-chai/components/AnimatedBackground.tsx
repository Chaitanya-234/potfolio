// components/AnimatedBackground.tsx
"use client";
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-darker via-dark-bg to-[#1a1f3a]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,217,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px] animate-grid" />
    </div>
  );
};

export default AnimatedBackground;
