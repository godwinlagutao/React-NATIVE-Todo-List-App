import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import useTheme from '@/hooks/useTheme'; // ✅ custom theme

const TabsLayout = () => {
  const { colors } = useTheme(); // now reads from your ThemeProvider
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: { 
          backgroundColor: colors.bg, // from your theme
          borderTopWidth: 1,
          borderTopColor: colors.border,
          height: 70,
          paddingTop: 5,
          paddingBottom: 15,
        },
        tabBarLabelStyle: { 
          fontSize: 12,
          fontWeight: "600",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Todos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flash-outline" size={size} color={color}/>
          ),
        }} 
      />
      <Tabs.Screen 
        name="settings" 
        options={{ 
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }} 
      />
    </Tabs>
  );
};

export default TabsLayout;
