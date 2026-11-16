
import { Stack } from "expo-router";

export default function TodosLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="[id]"
        options={{
          title: "Todo Details",
          headerBackTitle: "Todos",
        }}
      />
    </Stack>
  );
}
