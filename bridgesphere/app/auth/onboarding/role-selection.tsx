import { View, Text, Button, StyleSheet } from 'react-native'; 
import { router } from 'expo-router'; 

export default function RoleSelection(){
    return(
        
        <View style={styles.View}>
            <Text style={styles.title}>Role Selection Section</Text>
            {/* Role Selection button; on press, routes to one of the three onboarding pages: Client, Agent, and Brokerage */}
            <Button title='Client' onPress={() => router.push('/auth/onboarding/client-onboarding')} />
            <Button title='Agent' onPress={()=> router.push('/auth/onboarding/agent-onboarding')} />
            <Button title='Brokerage' onPress={()=> router.push('/auth/onboarding/brokerage-onboarding')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    View:{
        margin: 10,
        flex: 1,
        marginTop: 40
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});