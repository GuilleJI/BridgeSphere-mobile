import { View, Text, Button, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function BrokerageOnboarding(){
    return (
        <ScrollView>
            <View>
                <Text>
                    <h2> Building Your Brokerage Profile </h2>
                    <h4> Showcase your team and attract top-performing agents </h4>
                </Text>
                <br/>
                <Text>
                    <h3> **[Upload an Introduction Video]**</h3>
                </Text>
                <br/>
                <Text>
                    <h3>**[Brokerage Full Name + Upload Photo]**</h3>
                </Text>
                <br/>
                <Text>
                    <h3>**[Brokerage Basic Information]**</h3>
                </Text>
                <br/>
                <Text>
                    <h3>**[Brokerage Professional Information]**</h3>
                </Text>
                <br/>
                <Text>
                    <h3>**[What Sets Us Apart]**</h3>
                </Text>
                <br/>
                <Text>
                    <h3>**[ Brokerage Listings]**</h3>
                </Text>
                <br/>
                <Text>
                    <h3>**[Choose the Perfect Plan for Your Brokerage]**</h3>
                </Text>
                <br/>
                <Button title='Save Changes' onPress={()=>router.push('/(tabs)')} />
            </View>
        </ScrollView>
        
    )
}