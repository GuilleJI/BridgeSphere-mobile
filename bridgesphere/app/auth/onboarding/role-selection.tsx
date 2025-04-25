import { View, Text, Button } from 'react-native'; 
import { router } from 'expo-router'; 

export default function RoleSelection(){
    return(
        
        <View>
            <h1>Role Selection Section</h1>
            {/* Role Selection button; on press, routes to one of the three onboarding pages: Client, Agent, and Brokerage */}
            <Button title='Client' onPress={() => router.push('../onboarding/client-onboarding')} />
            <Button title='Agent' onPress={()=> router.push('../onboarding/agent-onboarding')} />
            <Button title='Brokerage' onPress={()=> router.push('../onboarding/brokerage-onboarding')}/>
        </View>
    )
}