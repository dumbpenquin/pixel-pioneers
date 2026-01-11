import React from 'react';

export default function CyberBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0B0F14] text-white">
      {/* Cyber grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(#141821 1px, transparent 1px),
            linear-gradient(90deg, #141821 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-[-120px] right-[-120px] w-[300px] h-[300px] bg-[#E63946] rounded-full blur-[140px] opacity-20" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[300px] h-[300px] bg-[#4D96FF] rounded-full blur-[140px] opacity-20" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
