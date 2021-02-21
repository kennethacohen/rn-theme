import { Theme } from "theme"
import {
  createBox,
  BoxProps as $BoxProps,
} from "@shopify/restyle"

export const Box = createBox<Theme>()
export type BoxProps = $BoxProps<Theme>

