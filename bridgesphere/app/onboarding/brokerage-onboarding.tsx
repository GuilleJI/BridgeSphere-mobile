import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';

export default function BrokerageOnboarding(){
    return (
        <View>
            <h1>Brokerage Onboarding Page</h1>
            <h2> Building Your Brokerage Profile </h2>
            <Text>[Placeholder: Upload an Introduction Video]</Text>
            <Text>[Placeholer: Brokerage Full Name + Upload Photo]</Text>
            <Text>[Placeholder: Brokerage Basic Information]</Text>
            <Text>[Placeholder: What Sets Us Apart]</Text>
            <Text>[Placeholder: Brokerage Listings]</Text>
            <Text>[Placeholder: Choose the Perfect Plan for Your Brokerage  ( Showing three cards representing Membership plans) ]</Text>
            <Text>[Placeholder: My Ideal Agent and/or Client ]</Text>
            <Button title='Save Changes' onPress={()=>router.push('/(tabs)')} />
        </View>
    )
}