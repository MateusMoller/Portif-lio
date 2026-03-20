import { motion as Motion, useScroll, useSpring } from 'framer-motion'

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  })

  return (
    <Motion.div
      aria-hidden="true"
      className="scroll-progress"
      style={{ scaleX, transformOrigin: '0% 50%' }}
    />
  )
}

export default ScrollProgressBar

