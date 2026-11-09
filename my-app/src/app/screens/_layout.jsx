import { Stack } from "expo-router";

export default function ScreensLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="test"
        options={{
          title: "Test Screen",
          headerShown: true,
        }}
      />
    </Stack>
  );
}