"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  life: number;
  decay: number;
  size: number;
  color: string;
}

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let mx = 0, my = 0;
    let hover = false;
    let particles: Particle[] = [];
    let frame: number;
    let lx = 0, ly = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        particles.push({
          x, y,
          vx: (Math.random() - 0.5) * 1.4,
          vy: -(Math.random() * 2.0 + 0.5),
          life: 1,
          decay: 0.016 + Math.random() * 0.014,
          size: Math.random() < 0.25 ? 2 : 1,
          color: hover ? "#a3ff12" : "#00d4ff",
        });
      }
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      const dx = mx - lx, dy = my - ly;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist >= 4) {
        spawn(mx, my, dist > 20 ? 3 : dist > 10 ? 2 : 1);
        lx = mx; ly = my;
      }
    };

    const onEnter = () => { hover = true; };
    const onLeave = () => { hover = false; };

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // cursor square — zero lag
      ctx.shadowColor = hover ? "#a3ff12" : "#00d4ff";
      ctx.shadowBlur = 10;
      ctx.fillStyle = hover ? "#a3ff12" : "#e0e0e0";
      ctx.fillRect(mx - 2, my - 2, 4, 4);
      ctx.shadowBlur = 0;

      particles = particles.filter((p) => p.life > 0);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // gravity
        p.life -= p.decay;
        ctx.globalAlpha = Math.max(0, p.life * p.life);
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
      }
      ctx.globalAlpha = 1;

      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[9999]" />;
}
