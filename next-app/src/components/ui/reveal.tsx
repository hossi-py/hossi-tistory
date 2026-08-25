"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** 같은 그룹 안에서 순서대로 나타나게 할 때 쓰는 지연(초). */
  delay?: number;
  className?: string;
};

/**
 * 뷰포트에 들어올 때 한 번만 떠오르는 연출.
 * 히어로가 파티클로 서서히 맺히는 리듬을 본문에서도 이어간다.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
