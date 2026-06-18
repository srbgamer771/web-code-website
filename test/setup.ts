import "@testing-library/jest-dom/vitest"
import React from "react"
import { vi } from "vitest"

type MockImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  priority?: boolean
  fill?: boolean
  quality?: number
}

vi.mock("next/image", () => ({
  default: function NextImageMock({ src, alt, ...props }: MockImageProps) {
    const { priority, fill, quality, ...imgProps } = props
    void priority
    void fill
    void quality

    return React.createElement("img", {
      ...imgProps,
      src: typeof src === "string" ? src : "",
      alt,
    })
  },
}))

type MotionProps = React.PropsWithChildren<
  Record<string, unknown> & {
    initial?: unknown
    animate?: unknown
    exit?: unknown
    transition?: unknown
    variants?: unknown
    whileInView?: unknown
    viewport?: unknown
  }
>

vi.mock("framer-motion", () => {
  const createMotionComponent = (tag: keyof React.JSX.IntrinsicElements) => {
    function MotionComponent({
      children,
      initial,
      animate,
      exit,
      transition,
      variants,
      whileInView,
      viewport,
      ...props
    }: MotionProps) {
      void initial
      void animate
      void exit
      void transition
      void variants
      void whileInView
      void viewport

      return React.createElement(tag, props, children)
    }

    MotionComponent.displayName = `Motion${String(tag)}`

    return MotionComponent
  }

  return {
    AnimatePresence: ({ children }: React.PropsWithChildren) => children,
    motion: new Proxy(
      {},
      {
        get: (_target, tag: string) =>
          createMotionComponent(tag as keyof React.JSX.IntrinsicElements),
      },
    ),
    useReducedMotion: () => false,
  }
})

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
