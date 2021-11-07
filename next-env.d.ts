/// <reference types="next" />
/// <reference types="next/types/global" />

// Allow SVG import as a module
declare module '*.svg' {
  export default JSX.IntrinsicElements.svg
}