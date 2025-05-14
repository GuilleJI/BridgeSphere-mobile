import { View, Text, Button, ScrollView, StyleSheet, TextInput } from 'react-native'; 
import { router } from 'expo-router';
import { useAppContext } from '../../../context/AppContext';
import { Picker } from '@react-native-picker/picker'; //importing picker 
import  React, {useState } from 'react' // importing usestate to allow us to obtain a state variable

export default function ClientOnboarding(){
    const { dispatch } = useAppContext(); 
    
    //Wiring logic to local state:  
        const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        phone: '',
        address: '', 
        language: '', 
    });

    const handleSave = () => {
        //Adding simple validation inside handleSave()...If neither of the following formdata properies are filled out, the app will alert the user to fill them out before saving...
        if(!formData.full_name || !formData.email || !formData.phone){
            alert("please fill out the required fields!");
            return;
        }
        dispatch({type: "COMPLETE_ONBOARDING"}); // Mark onboarding as complete
        router.replace("/(tabs)"); // Send user to the main app tabs 
    }

    return(
        <ScrollView>
            <View style={styles.pageLayout}>

                {/* Section 1: Profile */}
                <Text style={styles.sectionTitle}>Profile</Text>
                <TextInput 
                //wiring up client name 
                    placeholder="Client Full Name"
                    value={formData.full_name}
                    onChangeText={(text) => setFormData({ ...formData, full_name: text})}
                />
                <Text>[Upload Photo Placeholder]</Text>
                

                {/* Section 2: Basic Info */}
                <Text style={styles.sectionTitle}>Basic Information</Text>

                {/* Free Text */}
                <TextInput   
                    placeholder="Email"
                    // wiring up email address
                    value={formData.email}
                    onChangeText={(text) => setFormData({...formData, email: text})}
                />

                {/* Free Text*/}
                <TextInput 
                    placeholder="Phone Number"
                    //wiring up phone number
                    value={formData.phone}
                    onChangeText={(text) => setFormData({...formData, phone: text})}
                />

                {/* Free Text */}
                <TextInput 
                    placeholder="Address"
                    //wiring up address
                    value={formData.address}
                    onChangeText={(text) => setFormData({...formData, address: text})}
                
                />
                
                {/* Drop Down Menu */}
                <Text style={styles.language}>Language Proficiency</Text>
                <Picker
                    selectedValue={formData.language}
                    onValueChange={(itemValue) => 
                        setFormData({ ...formData, language: itemValue })
                    }>
                    <Picker.Item label="Select Language" value=""/>
                    <Picker.Item label="English" value="English"/>
                    <Picker.Item label="Spanish" value="Spanish"/>
                    <Picker.Item label="Farsi" value="Farsi"/>
                    <Picker.Item label="Mandarin" value="Mandarin"/>
                </Picker>
                




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
            </View>
            <Button title='Save Changes' onPress={ handleSave }/>
        </ScrollView>
        
    );
};

const styles = StyleSheet.create ({
    sectionTitle:{
        fontSize: 18
    },
    pageLayout: { 
        padding: 20,
        marginTop: 25
    }, 
    language:{
        marginTop: 12
    }

});
