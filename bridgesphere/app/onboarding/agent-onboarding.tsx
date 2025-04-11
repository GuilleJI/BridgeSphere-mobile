import { View, Text, Button } from 'react-native'; 
import { router } from 'expo-router';

export default function AgentOnboarding(){
    return(
        <View>
            <Text>
                <h2>Build Your Professional Profile</h2>
                <h4>Showcase your expertise and connect with high-value clients</h4>
            </Text>
            <Text>[Upload an Introduction Video]</Text>
            <Text>[Agent Full Name + Upload Photo]</Text>
            <Text>[Basic Information]</Text>
            <Text>[Professional Information]</Text>
            <Text>[Agent Transaction History]</Text>
            <Text>[Describe Your Story and Expertise]</Text>
            <Text>[Agent Listings + Upload Photo]</Text>
            <Text>[Choose the Right Plan to Boost Your Real Estate Career ( 3 Membership plans)]</Text>
            <Text>[My Ideal Brokerage]</Text>
            {/* Render Save button; on press, routes to the user profile as an agent */}
            <Button title="Save Changes" onPress={()=> router.push('/(tabs)')}/>
        </View>
    )
}