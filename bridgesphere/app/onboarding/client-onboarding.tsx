import { View, Text, Button } from 'react-native'; 
import { router } from 'expo-router';

export default function ClientOnboarding(){
    return(
        <View>
            <Text>
                <h2>Build Your Profile to Find the Right Agent</h2>
                <h4>Tell us your preferences to connect with agents who fit your needs</h4>
            </Text>
            <Text>[Client Full Name and Upload Photo]</Text>
            <Text>[Basic Information]</Text>
            <Text>[My Ideal Agent]</Text>
            <Button title='Save Changes' onPress={()=> router.push('/(tabs)')}/>
        </View>
    );
}