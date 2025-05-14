import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect} from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AppProvider } from "../context/AppContext";
// Wrapper to enable gesture handling (required by react-native-gesture-handler)
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <AppProvider>
        <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
          <Slot/>
          <StatusBar style="auto" />
        </ThemeProvider>
      </AppProvider>
    </GestureHandlerRootView>
  );
}


{/* 
              Stack Navigation:
              All screens below have their headers disabled to allow for full custom UI control.
              This is especially important during onboarding and login, where headers may clutter the design.
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="auth/login" options={{ headerShown: true}}/>
                <Stack.Screen name="role-selection" options={{ headerShown: true}}/>
                <Stack.Screen name="client-onboarding" options={{ headerShown: true }}/> 
                <Stack.Screen name="agent-onboarding" options={{ headerShown: true}}/> 
                <Stack.Screen name="brokerage-onboarding" options ={{ headerShown: true}}/>  
                <Stack.Screen name="+not-found" />
              </Stack>
            */}