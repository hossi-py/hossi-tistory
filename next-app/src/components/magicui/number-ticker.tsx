"use client"

import { useEffect, useRef, type ComponentPropsWithoutRef } from "react"
import { useInView, useMotionValue, useSpring } from "motion/react"

import { cn } from "@/lib/utils"

/** useInView 의 margin 타입을 시그니처에서 그대로 파생시킨다. */
type InViewMargin = NonNullable<Parameters<typeof useInView>[1]>["margin"]

function formatNumber(input: number, decimalPlaces: number) {
  return Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(Number(input.toFixed(decimalPlaces)))
}

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number
  startValue?: number
  direction?: "up" | "down"
  delay?: number
  decimalPlaces?: number
  /**
   * 카운트를 시작할 시점의 여유. 원본 기본값인 "0px" 은 숫자의 첫 1px 이
   * 화면 맨 아래 모서리에 닿자마자 시작되어, 실제로 눈에 들어올 때쯤이면
   * 이미 애니메이션이 끝나 있다. 아래에서 20% 올라온 뒤 시작하도록 바꿨다.
   */
  margin?: InViewMargin
}

export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  margin = "0px 0px -20% 0px",
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === "down" ? value : startValue)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin })

  // 첫 HTML 에는 최종 값을 넣어 둔다(아래 span children).
  // JS 가 죽거나 IntersectionObserver 가 끝내 발화하지 않아도 "0" 이 남지 않는다.
  // 마운트되면 그때 시작 값으로 되돌려 카운트업할 준비를 한다.
  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatNumber(
        direction === "down" ? value : startValue,
        decimalPlaces
      )
    }
  }, [decimalPlaces, direction, startValue, value])

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null

    if (isInView) {
      timer = setTimeout(() => {
        motionValue.set(direction === "down" ? startValue : value)
      }, delay * 1000)
    }

    return () => {
      if (timer !== null) {
        clearTimeout(timer)
      }
    }
  }, [motionValue, isInView, delay, value, direction, startValue])

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = formatNumber(latest, decimalPlaces)
        }
      }),
    [springValue, decimalPlaces]
  )

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block tracking-wider text-black tabular-nums dark:text-white",
        className
      )}
      {...props}
    >
      {formatNumber(direction === "down" ? startValue : value, decimalPlaces)}
    </span>
  )
}
