import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function BrokerageOnboarding(){
    return (
        <View>
            <Text>
                <h2> Building Your Brokerage Profile </h2>
                <h4> Showcase your team and attract top-performing agents </h4>
            </Text>
            <Text>[Upload an Introduction Video]</Text>
            <Text>[Brokerage Full Name + Upload Photo]</Text>
            <Text>[Brokerage Basic Information]</Text>
            <Text>[What Sets Us Apart]</Text>
            <Text>[Brokerage Listings]</Text>
            <Text>[Choose the Perfect Plan for Your Brokerage  ( Showing three cards representing Membership plans) ]</Text>
            <Text>[My Ideal Agent and/or Client ]</Text>
            <Button title='Save Changes' onPress={()=>router.push('/(tabs)')} />
        </View>
    )
}