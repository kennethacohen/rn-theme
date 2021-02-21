import React, { useState } from "react"
import {
  Box,
  Button,
  Stack,
  Text,
} from "@components/ui"
import {
  ScrollView,
  Switch,
} from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { Theme } from "theme"

export function Home() {

  // button settings
  const [buttonIsFullWidth, buttonIsFullWidthSet] = useState(false)
  return (
    <ScrollView>
      <Box
        flex={1}
        backgroundColor="white"
      >
        <Box
          height={80}
          flex={1}
          backgroundColor="white"
        />

        {/* typography */}
        <Section title="Typography">
          <Stack direction="column" spacing="sm">
            <Box>
              <Text fontWeight="600" color="gray700" textTransform="uppercase">
                Title1
              </Text>
              <Text variant="title1">The quick brown fox.</Text>
            </Box>
            <Box>
              <Text fontWeight="600" color="gray700" textTransform="uppercase">
                Title2
              </Text>
              <Text variant="title2">The quick brown fox.</Text>
            </Box>
            <Box>
              <Text fontWeight="600" color="gray700" textTransform="uppercase">
                Title3
              </Text>
              <Text variant="title3">The quick brown fox.</Text>
            </Box>
          </Stack>
        </Section>

        {/* buttons */}
        <Section title="Buttons">
          <Box flexDirection="row" alignItems="center" justifyContent="space-between">
            <Text variant="title3">Full width</Text>
            <Switch value={buttonIsFullWidth} onValueChange={buttonIsFullWidthSet} />
          </Box>
          
          <Stack>
            <Button
              colorScheme="blue500"
              size="sm"
              isFullWidth={buttonIsFullWidth}
            >
              Woof
            </Button>
            <Button
              colorScheme="blue500"
              size="md"
              isFullWidth={buttonIsFullWidth}
            >
              Woof
            </Button>
            <Button
              colorScheme="blue500"
              size="lg"
              isFullWidth={buttonIsFullWidth}
            >
              Woof
            </Button>
            <Button
              colorScheme="blue500"
              size="xl"
              isFullWidth={buttonIsFullWidth}
            >
              Woof
            </Button>
          </Stack>
        </Section>
      </Box>
    </ScrollView>
  )
}

type SectionProps = {
  title: string;
  children: React.ReactNode;
}

function Section({
  title,
  children,
}: SectionProps) {
  return (
    <Stack
      borderBottomColor="gray200"
      borderBottomWidth={1}
      paddingVertical="md"
      paddingHorizontal="sm"
      spacing="md"
    >
      <Text variant="title2">
        {title}
      </Text>

      {children}
    </Stack>
  )
}