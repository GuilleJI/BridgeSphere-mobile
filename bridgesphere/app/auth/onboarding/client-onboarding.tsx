import { View, Text, Button, ScrollView, StyleSheet, TextInput } from 'react-native'; 
import { router } from 'expo-router';
import { useAppContext } from '../../../context/AppContext';

export default function ClientOnboarding(){
    const { dispatch } = useAppContext(); 
    const handleSave = () => {
        dispatch({type: "COMPLETE_ONBOARDING"}); // Mark onboarding as complete
        router.replace("/(tabs)"); // Send user to the main app tabs 
    }
    return(
        <ScrollView>
            {/* Section 1: Profile */}
            <Text style={styles.sectionTitle}>Profile</Text>
            <TextInput placeholder="Client Full Name"/>
            <Text>[Upload Photo Placeholder]</Text>
            
            {/* Section 2: Basic Info */}
            <Text style={styles.sectionTitle}>Basic Information</Text>
            {/* Free Text */}
            <TextInput placeholder="Email"/>
            {/* Free Text*/}
            <TextInput placeholder="Phone Number"/>
            {/* Free Text */}
            <TextInput placeholder="Address"/>
            {/* Drop Down Menu */}
            <TextInput placeholder="Language Proficiency"/>
            
            {/* Section 3: My Ideal Agent */}
            <Text style={styles.sectionTitle}>My ideal Agent</Text>
            <Text>[Placeholder: Basic Information]</Text>
            {/*
                TODO: This will serve the contents under Basic Information  
                - Gender : Drop Down Menu
                - Availability: Drop Down Menu
                - Brokerage: Drop Down Menu
                - Language Proficiency: Drop Down Menu
            */}

            <Text>[Placeholder: Agent Degree & Certication]</Text>
            {/*
                TODO: This will serve the contents under Agent Degree & Certification
                - Highest Degree : Drop Down Menu
                - Certifications :  Drop Down Menu
                - Field of Study :  Drop Down Menu
                - Gender :  Drop Down Menu
            */}
            <Text>[Placeholder: Specialized Area]</Text>
            {/*
                TODO: This will serve the contents under Specialized Area
                - Province :  Drop Down Menu
                - Neighborhood Code :  Drop Down Menu
                - City :  Drop Down Menu
                - Neighborhood:  Drop Down Menu
            */}
            <Text>[Placeholder: Agent Transaction History]</Text>
            {/*
                TODO: This will serve the contents under Agent Transaction History
                - Minimum Property Price : Free Text 
                - Annual Sales $ :  Drop Down Menu with Rangers
                - Annual Sales Volume: Free Text
                - Awards : Free Text
            */}
            <Text>[Placeholder: Expertise Type]</Text>
            {/*
                TODO: This will serve the contents under Expertise Type (Button/Radio button/Checklist??)
                - Invest
                - Buy
                - Sell 
                - Rent
            */}
            <Text>[Placeholder: Specific Property Type]</Text>
            {/*
                TODO: This will serve the contents under Specific Property Type (Button/Radio button/Checklist??)
                - Residential 
                - Commercial
                - Industrial
                - Agriculture
                - Mixed Use
            */}
            <Text>[Placeholder: Property Type]</Text>
            {/*
                TODO: This will serve the contents under Property Type (Button/Radio button/Checklist??)
                - Condos
                - Detached
                - Semi-Detached
                - Town House
                - Pre-Construction
            */}
            <Text>[Placeholder: Specific Sector Type]</Text>
            {/*
                TODO: This will serve the contents under Specific Sector Type (Button/Radio button/Checklist??)
                - Investment Properties 
                - Luxury Properties
                - Foreclosure
            */}
            <Text>[Placeholder: Client Type]</Text>
            {/*
                TODO: This will serve the contents under Client Type (Button/Radio button/Checklist??)
                - First Time Home Buyer
                - Luxury Buyer/Seller
                - Investor
                - Business Owners
            */}
            
            {/* <Button title='Edit Profile'/> */}
            <Button title='Save Changes' onPress={ handleSave }/>
        </ScrollView>
        
    );
};

const styles = StyleSheet.create ({
    sectionTitle:{
        
    }

});
