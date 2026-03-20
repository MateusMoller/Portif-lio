function TiltCard({ children, className = '' }) {
  return <div className={`tilt-card ${className}`.trim()}>{children}</div>
}

export default TiltCard
