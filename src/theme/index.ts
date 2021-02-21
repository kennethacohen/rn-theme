import { createTheme } from "@shopify/restyle"
import {
  colors,
  shadows,
  spacing,
  typography,
} from "./foundation"
import {
  Button,
} from "./components"

const theme = createTheme({
  colors,
  spacing,
  textVariants: typography,
  shadows,
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  components: {
    Button,
  }
})

export type Theme = typeof theme
export default theme