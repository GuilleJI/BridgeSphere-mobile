import { View, Text, Button } from 'react-native'; 
import { router } from 'expo-router';

export default function ClientOnboarding(){
    return(
        <View>
            
            <h1>Client Onboarding Page</h1>
            <h2>Build Your Profile to Find the Right Agent</h2>
            <Text>[Placeholder: Client Full Name and Upload Photo]</Text>
            <Text>[Placeholder: Basic Information]</Text>
            <Text>[Placeholder: My Ideal Agent]</Text>
            <Button title='Save Changes' onPress={()=> router.push('/(tabs)')}/>
        </View>
    );
}