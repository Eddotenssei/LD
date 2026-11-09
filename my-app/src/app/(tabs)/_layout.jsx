import { Tabs } from "expo-router";
import { House, Calendar } from "lucide-react-native";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <House color={color} size={24} />
          ),
        }}
      />

      <Tabs.Screen
        name="todos"
        options={{
          title: "Todos",
          tabBarIcon: ({ color }) => (
            <Calendar color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}