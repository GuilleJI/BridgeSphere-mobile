import { View, Text, Button } from 'react-native'; 
import { router } from 'expo-router';

export default function Login(){
    return(
        <View>
            <h1>login page</h1>
            <Text>
                <h2>BridgeSphere</h2>
                <h2>Welcome</h2>
                <h4>Please Login Here</h4>
            </Text>
            
            <Text>[Email Address Input]</Text>
            <Text>[Password ]</Text>
            <Button title='Login' onPress={() => router.push('/onboarding/role-selection')}></Button> {/* Login button: navigates to the role selection page on press */}
        </View>
        
    );
}