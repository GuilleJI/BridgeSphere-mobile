import { View, Text, StyleSheet, TextInput } from 'react-native'; 
import { Button } from '@rneui/themed'; // Import the Button component from the @rneui/themed library for styled UI elements
import { router } from 'expo-router'; // Import the router object from expo-router for navigation handling
import  React  from 'react'; 

export default function Login(){
    // State for Email input 
    const [text, onChangeText] = React.useState('Email'); 
    // State for Password input
    const [text2, onChangeText2] = React.useState('Password')
    
    return(
        <View >
            <h2>BridgeSphere</h2>
            <h2>Welcome</h2>
            <h4>Please Login Here</h4>

            <Text>Email Address</Text>
            {/* Email input field */}
            <TextInput
                style={styles.inputEmail}   // Apply Email input styling (basic)
                onChangeText={onChangeText} // Update state when text changes 
                value={text}                // Displat current password state
            />
            
            <Text>Password</Text>
            {/* Password input field */}
            <TextInput
                style={styles.inputPassword} // Apply password input styling (basic)
                onChangeText={onChangeText2} // Update state when text changes
                value={text2}                // Display current password state 
            />
            
            {/* Buttons container */}
            <View style={styles.buttonsContainer}>
                {/*Login button: navigates to role selection on press (onboarding testing) */}
                <Button 
                    title='Login' 
                    onPress={() => router.push('../auth/onboarding/role-selection')}
                    color='white'
                    buttonStyle={{
                        backgroundColor: 'rgb(24, 27, 209)', //Blue background 
                        borderRadius: 10                       // Basic rounded corners
                    }}
                    titleStyle={{ fontWeight: 'normal', fontSize: 15}} // Text styling 
                    containerStyle={{
                        marginHorizontal: 50, 
                        height: 50, 
                        width: 350, 
                        marginVertical: 5,
                    }}
                />{/* Login button: navigates to the role selection page on press */}

                {/* Sign Up button */}
                <Button 
                    title='Sign Up'
                    buttonStyle={{
                        borderRadius: 10 // Rounded corners
                    }}
                    titleStyle={{ fontWeight: 'normal', fontSize: 15 }}
                    containerStyle={{
                        marginHorizontal: 50,
                        height: 50, 
                        width: 350,

                    }}
                />
            </View>       
        </View>
        
    );
}

const styles = StyleSheet.create ({
    // Style for the email input field 
    inputEmail:{
        height: 40,                 // Set Height
        margin: 12,                 // Outer spacing 
        width: 350,                 // Fixed width
        borderWidth: 2,             // Border thickness
        padding: 10,                // Inner Spacing 
        justifyContent: 'center'    //Center content vertically
    },
    // Style for the password input
    inputPassword:{
        height: 40,                  
        margin: 12,                  
        width: 350,                 
        borderWidth: 2,             
        padding: 10,                
    },
    // Style for the container holding the buttons 
    buttonsContainer : {
        flexDirection: 'column',    //Stack children vertically 
        justifyContent: 'center',   //Center children vertically
        alignItems: 'center',       //Fixed Width
        width: '100%',              //Border thickness
        marginVertical: 20          //Inner spacing

    }
}); 