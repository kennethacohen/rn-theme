import React from "react"
import { Box, BoxProps } from "@components/ui"
import { Theme } from "theme"

export type StackProps = {
  spacing?: keyof Theme["spacing"];
  direction?: "row" | "column";
  align?: BoxProps["alignItems"];
  justify?: BoxProps["justifyContent"];
  children: React.ReactNode;
} & BoxProps

export function Stack({
  spacing="sm",
  direction="column",
  align,
  justify,
  children,
  ...rest
}: StackProps) {
  const $children = React.Children.toArray(children).filter(child => {
    return React.isValidElement(child)
  })

  const styles = React.useMemo(() => getStackStyles({ direction, spacing }), [
    direction,
    spacing,
  ])

  const clones = $children.map((child, index) => {
    const spacing = index > 0 ? styles["spacing"] : undefined

    return (
      <Box key={index} {...spacing}>
        {child}
      </Box>
    )
  })

  return (
    <Box
      alignItems={align}
      justifyContent={justify}
      flexDirection={styles.flexDirection}
      {...rest}
    >
      {clones}
    </Box>
  )
}

type Options = {
  spacing?: keyof Theme["spacing"];
  direction: "row" | "column";
}

function getStackStyles(options: Options) {
  const { spacing, direction } = options
  
  const directionStyles = {
    column: { mt: spacing, ml: "none" },
    row: { mt: "none", ml: spacing },
  }

  return {
    flexDirection: direction,
    spacing: directionStyles[direction],
  }
}
