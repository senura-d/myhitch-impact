import React from 'react';

export default function TextureOverlay({ opacity = 1, size = 8, dotColor = 'rgba(15, 23, 42, 0.12)' }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        opacity,
        backgroundImage: `radial-gradient(circle at 1px 1px, ${dotColor} 1px, transparent 0)`,
        backgroundSize: `${size}px ${size}px`,
        zIndex: 0
      }}
    />
  );
}
