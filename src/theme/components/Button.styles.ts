import { Theme } from "theme"

/**
 * Types
 * 
 */
type Size = {
  [key: string]: {
    fontSize: number;
    fontWeight: any;
    height: number;
    borderRadius: number;
    paddingHorizontal: keyof Theme["spacing"];
  }
}

/**
 * Implementation
 * 
 */
const sizes: Size = {
  sm: {
    fontSize: 14,
    fontWeight: "600",
    height: 36,
    borderRadius: 6,
    paddingHorizontal: "sm",
  },
  md: {
    fontSize: 18,
    fontWeight: "600",
    height: 44,
    borderRadius: 6,
    paddingHorizontal: "sm",
  },
  lg: {
    fontSize: 22,
    fontWeight: "600",
    height: 56,
    borderRadius: 6,
    paddingHorizontal: "sm",
  },
  xl: {
    fontSize: 26,
    fontWeight: "600",
    height: 62,
    borderRadius: 6,
    paddingHorizontal: "sm",
  },
}

export const Button = {
  sizes,
}