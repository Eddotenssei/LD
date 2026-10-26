import { Tabs } from 'expo-router';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';


const queryClient = new QueryClient();

export default function TabLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs>
        <Tabs.Screen
          name="index"
        />
      <Tabs.Screen
        name="todos"
      />
    </Tabs>
    </QueryClientProvider>
  );
}