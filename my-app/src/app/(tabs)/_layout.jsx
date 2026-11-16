import { Tabs } from "expo-router";
import { Calendar, House } from "lucide-react-native";

export default function TabsLayout() {
  return (
  
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => <House color={color} size={24} />,
        }}
      />

      <Tabs.Screen
        name="todos"
        options={{
          headerShown: false,
          title: "Todos",
          tabBarIcon: ({ color }) => <Calendar color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}
