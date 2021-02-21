import React from "react"
import { useTheme } from "@shopify/restyle"
import { Theme } from "theme"
import {
  Button as $Button,
  TouchableOpacity,
} from "react-native"
import {
  Box,
  Text,
} from "@components/ui"

export type ButtonProps = {
  children?: React.ReactNode;
  onPress?: () => void;
  colorScheme?: keyof Theme["colors"];
  size?: keyof Theme["components"]["Button"]["sizes"];
  isFullWidth?: boolean;
}

export function Button({
  children,
  onPress,
  colorScheme,
  size="md",
  isFullWidth,
}: ButtonProps) {
  const theme = useTheme<Theme>()
  const componentStyles = theme.components.Button

  // size variant
  const sizeVariant = componentStyles.sizes[size]
  const {
    fontSize,
    fontWeight,
    ...restSize
  } = sizeVariant

  // width
  const alignSelf = isFullWidth ? "stretch" : "flex-start"

  const innerMarkup = (
    <Box
      {...restSize}
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      alignSelf={alignSelf}
      backgroundColor={colorScheme}
    >
      <Text
        fontSize={fontSize}
        fontWeight={fontWeight}
        color="white"
      >
        {children}
      </Text>
    </Box>
  )

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      {/* <Box flexDirection="row" backgroundColor="orange100" alignSelf="stretch">
        <Text>Woof</Text>
      </Box> */}
      {innerMarkup}
    </TouchableOpacity>
  )
}