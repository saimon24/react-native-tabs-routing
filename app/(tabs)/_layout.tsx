import { Tabs } from 'expo-router';

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
