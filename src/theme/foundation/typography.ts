const baseProps = {
  textAlign: "left",
}

export const typography = {
  title1: {
    fontSize: 34,
    lineHeight: 42.5,
    fontWeight: "900",
    letterSpacing: -1,
    ...baseProps,
  },
  
  title2: {
    fontSize: 28,
    lineHeight: 36,
    fontWeight: "800",
    letterSpacing: -1,
    ...baseProps,
  },
  
  title3: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    letterSpacing: 0,
    ...baseProps,
  },
}