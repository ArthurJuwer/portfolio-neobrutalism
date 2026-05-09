import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import mainimagemArthurJuwer from "../../assets/imagem-arthurjuwer.webp";
// import mainimagemArthurJuwerMobile from "../../assets/imagem-arthurjuwerMobile.webp";

// const isMobile = (): boolean => {
//   return window.screen.width <= 768;
// };

const MainImg = () => {
  const imagemArthurJuwer =  mainimagemArthurJuwer;

  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="relative w-11/12 lg:w-auto flex items-center justify-center"
    >
      <img
        src={imagemArthurJuwer}
        alt="arthur juwer portifolio imagem"
        className="w-full lg:w-11/12 lg:h-auto animate-flutuar"
      />
    </motion.div>
  );
};

export default MainImg;
