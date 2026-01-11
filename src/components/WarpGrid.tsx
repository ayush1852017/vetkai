import { useRef, useEffect } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

interface WarpGridProps {
  className?: string;
}

export const WarpGrid = ({ className = '' }: WarpGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useMousePosition();
  const animationRef = useRef<number>();
  const pointsRef = useRef<Array<{ x: number; y: number; originX: number; originY: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      // Reinitialize grid points - wider gap for Kolam feel
      const gap = 60;
      const cols = Math.ceil(window.innerWidth / gap) + 2;
      const rows = Math.ceil(window.innerHeight / gap) + 2;
      
      pointsRef.current = [];
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          pointsRef.current.push({
            x: i * gap,
            y: j * gap,
            originX: i * gap,
            originY: j * gap,
          });
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gravityRadius = 250;
      const gravityStrength = 20;

      pointsRef.current.forEach((point) => {
        const dx = mousePosition.x - point.originX;
        const dy = mousePosition.y - point.originY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < gravityRadius) {
          const force = (1 - distance / gravityRadius) * gravityStrength;
          const angle = Math.atan2(dy, dx);
          point.x = point.originX + Math.cos(angle) * force;
          point.y = point.originY + Math.sin(angle) * force;
        } else {
          // Lerp back to origin
          point.x += (point.originX - point.x) * 0.1;
          point.y += (point.originY - point.y) * 0.1;
        }

        // Draw point - Gold/Terracotta dots
        const alpha = distance < gravityRadius 
          ? 0.3 + (1 - distance / gravityRadius) * 0.4
          : 0.1;
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
        // Use traditional colors (Gold/Terracotta)
        ctx.fillStyle = `hsla(43, 98%, 53%, ${alpha})`; // Gold
        ctx.fill();
      });

      // Draw connecting lines (Kolam lines)
      pointsRef.current.forEach((point, i) => {
        pointsRef.current.slice(i + 1).forEach((other) => {
          const dx = point.x - other.x;
          const dy = point.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 90) { // Increased connection distance
            const cursorDx = mousePosition.x - point.x;
            const cursorDy = mousePosition.y - point.y;
            const cursorDistance = Math.sqrt(cursorDx * cursorDx + cursorDy * cursorDy);

            if (cursorDistance < 200) {
              const alpha = (1 - distance / 90) * (1 - cursorDistance / 200) * 0.4;
              ctx.beginPath();
              ctx.moveTo(point.x, point.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = `hsla(14, 61%, 48%, ${alpha})`; // Terracotta lines
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
};
