import { Stack, Tabs } from 'expo-router';
import { FontAwesome5 } from '@expo/vector-icons';

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          headerTitle: 'Home Screen',
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          tabBarLabel: 'List',
          headerTitle: 'Cool List',
        }}
      />
    </Tabs>
  );
};
