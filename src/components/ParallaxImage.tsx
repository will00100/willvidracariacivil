import { useEffect, useRef, useState } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  overlay?: boolean;
}

export const ParallaxImage = ({
  src,
  alt,
  className = "",
  speed = 0.5,
  overlay = true,
}: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far into the viewport the element is
      const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      
      // Calculate parallax offset
      setOffset((clampedProgress - 0.5) * 100 * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-[120%] w-full object-cover transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(0, ${offset}px, 0) scale(1.1)`,
        }}
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
      )}
    </div>
  );
};
