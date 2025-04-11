import { View, Text, Button } from 'react-native'; 
import { router } from 'expo-router';

export default function AgentOnboarding(){
    return(
        <View>
            <h1>Agent Onboarding Page</h1>
            <h2>Build Your Professional Profile</h2>
            <Text>[Placeholder: Upload an Introduction Video]</Text>
            <Text>[Placeholder: Agent Full Name + Upload Photo]</Text>
            <Text>[Placeholder: Basic Information]</Text>
            <Text>[Placeholder: Professional Information]</Text>
            <Text>[Placeholder: Agent Transaction History]</Text>
            <Text>[Placeholder: Describe Your Story and Expertise]</Text>
            <Text>[Placeholder: Agent Listings + Upload Photo]</Text>
            <Text>[Placeholder: Choose the Right Plan to Boost Your Real Estate Career ( Showing three cards representing Membership plans)]</Text>
            <Text> [Placeholder: My Ideal Brokerage]</Text>
            {/* Render Save button; on press, routes to the user profile as an agent */}
            <Button title="Save Changes" onPress={()=> router.push('/(tabs)')}/>
        </View>
    )
}