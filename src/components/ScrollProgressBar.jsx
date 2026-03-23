import { Motion, useReducedMotion, useScroll, useSpring } from '../utils/motion'

function ScrollProgressBar() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  })

  if (shouldReduceMotion) {
    return null
  }

  return (
    <Motion.div
      aria-hidden="true"
      className="scroll-progress"
      style={{ scaleX, transformOrigin: '0% 50%' }}
    />
  )
}

export default ScrollProgressBar

