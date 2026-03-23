import { useEffect, useRef, useState } from 'react'

const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -80px 0px',
}

const observerCallbacks = new WeakMap()
let sharedObserver = null

function getSharedObserver() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null
  }

  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        }

        const callback = observerCallbacks.get(entry.target)
        if (callback) {
          callback()
          observerCallbacks.delete(entry.target)
        }

        sharedObserver?.unobserve(entry.target)
      })
    }, observerOptions)
  }

  return sharedObserver
}

function Reveal({ children, className = '', delay = 0 }) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(
    typeof window === 'undefined' || !('IntersectionObserver' in window),
  )

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return undefined
    }

    const observer = getSharedObserver()
    if (!observer) {
      return undefined
    }

    observerCallbacks.set(element, () => setIsVisible(true))
    observer.observe(element)

    return () => {
      observerCallbacks.delete(element)
      observer.unobserve(element)
    }
  }, [])

  return (
    <div
      ref={elementRef}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default Reveal
