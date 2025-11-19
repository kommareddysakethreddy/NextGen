// ✅ FIXED VERSION of CustomCursor.tsx for Next.js + TypeScript (Final Fixes)
'use client'

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  CSSProperties,
} from 'react'

// ✅ Updated DeviceChecker interface
type DeviceChecker = {
  info?: string
  Android: () => RegExpMatchArray | null
  BlackBerry: () => RegExpMatchArray | null
  IEMobile: () => RegExpMatchArray | null
  iOS: () => RegExpMatchArray | null
  iPad: () => boolean
  OperaMini: () => RegExpMatchArray | null
  any: () => boolean
}

const IsDevice: DeviceChecker | undefined =
  typeof navigator === 'undefined'
    ? undefined
    : {
        info: navigator.userAgent,
        Android: () => navigator.userAgent.match(/Android/i),
        BlackBerry: () => navigator.userAgent.match(/BlackBerry/i),
        IEMobile: () => navigator.userAgent.match(/IEMobile/i),
        iOS: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),
        iPad: () =>
          navigator.userAgent.match(/Mac/) !== null &&
          navigator.maxTouchPoints > 2,
        OperaMini: () => navigator.userAgent.match(/Opera Mini/i),
        any: function () {
          return Boolean(
            this.Android() ||
              this.BlackBerry() ||
              this.iOS() ||
              this.iPad() ||
              this.OperaMini() ||
              this.IEMobile()
          )
        },
      }

// ✅ Custom hook for event listener
type Handler<K extends keyof DocumentEventMap> = (
  event: DocumentEventMap[K]
) => void

function useEventListener<K extends keyof DocumentEventMap>(
  eventName: K,
  handler: Handler<K>,
  // element: Document | HTMLElement = document
  element: Document | HTMLElement | null = typeof window !== 'undefined' ? document : null

) {
  const savedHandler = useRef<Handler<K> | null>(null)

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    if (!element || !element.addEventListener || !savedHandler.current) return

    const eventListener = (event: Event) =>
      savedHandler.current?.(event as DocumentEventMap[K])

    element.addEventListener(eventName, eventListener)
    return () => element.removeEventListener(eventName, eventListener)
  }, [eventName, element])
}

// ✅ Cursor component props
interface CursorProps {
  outerStyle?: CSSProperties
  innerStyle?: CSSProperties
  color?: string
  outerAlpha?: number
  innerSize?: number
  innerScale?: number
  outerSize?: number
  outerScale?: number
  trailingSpeed?: number
  clickables?: string[]
}

const Cursor: React.FC<CursorProps> = ({
  outerStyle,
  innerStyle,
  color = '220, 90, 90',
  outerAlpha = 0.3,
  innerSize = 8,
  outerSize = 8,
  outerScale = 6,
  innerScale = 0.6,
  trailingSpeed = 8,
  clickables = ['a', 'button', 'input', 'select', 'textarea', '.link'],
}) => {
  const cursorOuterRef = useRef<HTMLDivElement>(null)
  const cursorInnerRef = useRef<HTMLDivElement>(null)
  const requestRef = useRef<number | null>(null)
  const previousTimeRef = useRef<number | null>(null)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [isActiveClickable, setIsActiveClickable] = useState(false)
  const endX = useRef<number>(0)
  const endY = useRef<number>(0)

  const onMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e
    setCoords({ x: clientX, y: clientY })
    if (cursorInnerRef.current) {
      cursorInnerRef.current.style.top = `${clientY}px`
      cursorInnerRef.current.style.left = `${clientX}px`
    }
    endX.current = clientX
    endY.current = clientY
  }, [])

  const animateOuterCursor = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / trailingSpeed
        coords.y += (endY.current - coords.y) / trailingSpeed
        if (cursorOuterRef.current) {
          cursorOuterRef.current.style.top = `${coords.y}px`
          cursorOuterRef.current.style.left = `${coords.x}px`
        }
      }
      previousTimeRef.current = time
      requestRef.current = requestAnimationFrame(animateOuterCursor)
    },
    [coords, trailingSpeed]
  )

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor)
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [animateOuterCursor])

  useEventListener('mousemove', onMouseMove)
  useEventListener('mousedown', () => setIsActive(true))
  useEventListener('mouseup', () => setIsActive(false))
  useEventListener('mouseover', () => setIsVisible(true))
  useEventListener('mouseout', () => setIsVisible(false))

  useEffect(() => {
    if (!cursorInnerRef.current || !cursorOuterRef.current) return
    cursorInnerRef.current.style.transform = `translate(-50%, -50%) scale(${isActive ? innerScale : 1})`
    cursorOuterRef.current.style.transform = `translate(-50%, -50%) scale(${isActive ? outerScale : 1})`
  }, [isActive, innerScale, outerScale])

  useEffect(() => {
    if (!cursorInnerRef.current || !cursorOuterRef.current) return
    if (isVisible) {
      cursorInnerRef.current.style.opacity = '1'
      cursorOuterRef.current.style.opacity = '1'
    } else {
      cursorInnerRef.current.style.opacity = '0'
      cursorOuterRef.current.style.opacity = '0'
    }
  }, [isVisible])

  useEffect(() => {
    const clickableEls = document.querySelectorAll(clickables.join(','))
    clickableEls.forEach((el) => {
      el.addEventListener('mouseover', () => setIsActive(true))
      el.addEventListener('mousedown', () => setIsActiveClickable(true))
      el.addEventListener('mouseup', () => setIsActive(true))
      el.addEventListener('mouseout', () => {
        setIsActive(false)
        setIsActiveClickable(false)
      })
    })
    return () => {
      clickableEls.forEach((el) => {
        el.removeEventListener('mouseover', () => setIsActive(true))
        el.removeEventListener('mousedown', () => setIsActiveClickable(true))
        el.removeEventListener('mouseup', () => setIsActive(true))
        el.removeEventListener('mouseout', () => {
          setIsActive(false)
          setIsActiveClickable(false)
        })
      })
    }
  }, [clickables])

  if (typeof document !== 'undefined') {
    document.body.style.cursor = 'none'
  }

  return (
    <>
      <div ref={cursorOuterRef} style={{
        zIndex: 999,
        position: 'fixed',
        borderRadius: '50%',
        pointerEvents: 'none',
        width: outerSize,
        height: outerSize,
        backgroundColor: `rgba(${color}, ${outerAlpha})`,
        transition: 'opacity 0.15s ease-in-out, transform 0.15s ease-in-out',
        willChange: 'transform',
        ...outerStyle,
      }} />
      <div ref={cursorInnerRef} style={{
        zIndex: 999,
        position: 'fixed',
        borderRadius: '50%',
        pointerEvents: 'none',
        width: innerSize,
        height: innerSize,
        backgroundColor: `rgba(${color}, 1)`,
        transition: 'opacity 0.15s ease-in-out, transform 0.25s ease-in-out',
        ...innerStyle,
      }} />
    </>
  )
}

const CustomCursor = (props: CursorProps) => {
  if (typeof navigator !== 'undefined' && IsDevice?.any()) {
    return <></>
  }
  return <Cursor {...props} />
}

export default CustomCursor