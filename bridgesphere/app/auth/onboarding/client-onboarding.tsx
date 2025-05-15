import { View, Text, Button, ScrollView, StyleSheet, TextInput } from 'react-native'; 
import { router } from 'expo-router';
import { useAppContext } from '../../../context/AppContext';
import { Picker } from '@react-native-picker/picker'; //importing picker 
import  React, {useState } from 'react' // importing usestate to allow us to obtain a state variable
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ClientOnboarding(){
    const { dispatch } = useAppContext(); 
    
    //Wiring logic to Define state keys:  
        const [formData, setFormData] = useState({
            full_name: '',
            email: '',
            phone: '',
            address: '',
            language: '',
            preferred_agent_gender: '',
            availability: '',
            preferred_brokerage: '',
            agent_language: '', 
            agent_degree: '',    
            certification: '',   
            field_of_study: '',  
            province: '',
            city: '',
            neighborhood: '',
            neighborhood_code: '',
            min_property_price: '',
            annual_sales_range: '',
            annual_sales_volume: '',
            awards: '', 
            expertise_type: [],  // stays multi-select
            property_type: [],   // stays multi-select
            client_type: [],     // stays multi-select
    });

    const EXPERTISE_OPTIONS = ['Buy', 'Sell', 'Invest', 'Rent']; 
    const CLIENT_TYPE_OPTIONS=['First Time Buyer', 'Luxury Buyer/Seller', 'Investor', 'Business Owner']; 

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
                <Text >[Upload Photo Placeholder]</Text>
                

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
                    style={{marginTop: 5, marginBottom:10}}
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
                <Text style={{ fontWeight: 'semibold'}}>[Basic Information]</Text>
                {/*
                    TODO: This will serve the contents under Basic Information  
                    - Gender : Drop Down Menu
                    - Availability: Drop Down Menu
                    - Brokerage: Drop Down Menu
                    - Language Proficiency: Drop Down Menu
                */}
                <Text style={styles.gender}>Gender: </Text>
                <Picker
                    style={{}}
                    selectedValue={formData.preferred_agent_gender}
                    onValueChange={(itemValue) => 
                        setFormData({...formData, preferred_agent_gender: itemValue})
                    }>
                    <Picker.Item label="Select Gender" value=""/>
                    <Picker.Item label="Male" value="Male"/>
                    <Picker.Item label="Female" value="Female"/>
                    <Picker.Item label="No Preference" value="No Preference" />

                </Picker>

                <Text style={styles.availability}>Availability: </Text>
                <Picker
                    style={{}}
                    selectedValue={formData.availability}
                    onValueChange={(itemValue) => 
                        setFormData({...formData, availability: itemValue})
                    }>
                    <Picker.Item label="Select Availability" value=""/>
                    <Picker.Item label="Weekdays" value="Weekdays"/>
                    <Picker.Item label="Flexible" value="Flexible"/>
                </Picker>

                <Text style={styles.Brokerage}>Brokerage: </Text>
                <Picker
                    style={{}}
                    selectedValue={formData.preferred_brokerage}
                    onValueChange={(itemValue) => 
                        setFormData({...formData, preferred_brokerage: itemValue})
                    }>
                    <Picker.Item label="Brokerage" value=""/>
                    <Picker.Item label="Brokerage A" value="Brokerage A"/>
                    <Picker.Item label="Brokerage B" value="Brokerage B"/>
                    <Picker.Item label="Brokerage C" value="Brokerage C"/>
                </Picker>

                <Text style={styles.language}>Language Proficiency: </Text>
                <Picker
                    style={{}}
                    selectedValue={formData.agent_language}
                    onValueChange={(itemValue) => 
                        setFormData({...formData, agent_language: itemValue})
                    }>
                    <Picker.Item label="Agent Language Proficiency" value=""/>
                    <Picker.Item label="English" value=""/>
                    <Picker.Item label="Spanish" value=""/>
                    <Picker.Item label="French" value=""/>
                    <Picker.Item label="Farsi" value=""/>
                    <Picker.Item label="Mandarin" value=""/>
                </Picker>



                <Text style={{ fontWeight: 'semibold'}}>[Degree & Certication]</Text>
                {/*
                    TODO: This will serve the contents under Agent Degree & Certification
                    - Highest Degree : Drop Down Menu
                    - Certifications :  Drop Down Menu
                    - Field of Study :  Drop Down Menu
                    - Gender :  Drop Down Menu
                */}
                <Text style={styles.Degree}>Highest Degree: </Text>
                <Picker
                    style={{}}
                    selectedValue={formData.agent_degree}
                    onValueChange={(itemValue) => 
                        setFormData({...formData, agent_degree: itemValue})
                    }>
                    <Picker.Item label="Highest Degree: " value=""/>
                    <Picker.Item label="Associates" value="Associates"/>
                    <Picker.Item label="Bachelors" value="Bachelors"/>
                    <Picker.Item label="Masters" value="Masters"/>
                </Picker>

                <Text style={styles.Certifications}>Certifications: </Text>
                <Picker
                    style={{}}
                    selectedValue={formData.certification}
                    onValueChange={(itemValue) => 
                        setFormData({...formData, certification: itemValue})
                    }>
                    <Picker.Item label="Certifications" value=""/>
                    <Picker.Item label="Cert 1" value="Cert 1"/>
                    <Picker.Item label="Cert 2" value="Cert 2"/>
                    <Picker.Item label="Cert 3" value="Cert 3"/>
                </Picker>

                <Text style={styles.Field}>Field of Study: </Text>
                <Picker
                    style={{}}
                    selectedValue={formData.field_of_study}
                    onValueChange={(itemValue) => 
                        setFormData({...formData, field_of_study: itemValue})
                    }>
                    <Picker.Item label="Field of Study" value=""/>
                    <Picker.Item label="Field 1" value="Field 1"/>
                    <Picker.Item label="Field 2" value="Field 2"/>
                    <Picker.Item label="Field 3" value="Field 3"/>   
                    </Picker>
                <Text style={styles.gender}>Gender: </Text>
                <Picker
                    style={{}}
                    selectedValue={formData.preferred_agent_gender}
                    onValueChange={(itemValue) => 
                        setFormData({...formData, preferred_agent_gender: itemValue})
                    }
                >
                    <Picker.Item label="Gender" value=""/>
                    <Picker.Item label="Male" value="Male"/>
                    <Picker.Item label="Female" value="Female"/>
                    <Picker.Item label="No Preference" value="no_preference" />


                </Picker>
                

                <Text style={{ fontWeight: 'semibold'}}>[Specialized Area]</Text>
                {/*
                    TODO: This will serve the contents under Specialized Area
                    - Province :  Drop Down Menu
                    - Neighborhood Code :  Drop Down Menu
                    - City :  Drop Down Menu
                    - Neighborhood:  Drop Down Menu
                */}
                <Text>Province: </Text>
                <Picker
                    style={{}}
                    selectedValue={formData.province}
                    onValueChange={(itemValue) => 
                        setFormData({...formData, province: itemValue})}
                >
                    <Picker.Item label="Select Province" value=""/>
                    <Picker.Item label="ON" value="ON"/>
                </Picker>

                <Text>Neighborhood Code: </Text>
                <Picker
                    style={{}}
                    selectedValue={formData.neighborhood_code}
                    onValueChange={(itemValue) => 
                    setFormData({...formData, neighborhood_code: itemValue})}
                >
                    <Picker.Item label="Select Neighborhood Code" value=""/>
                    <Picker.Item label="Code 1" value="Code 1"/>
                    <Picker.Item label="Code 2" value="Code 2"/>
                </Picker>

                <Text>City: </Text>
                <Picker
                    style={{}}
                    selectedValue={formData.city}
                    onValueChange={(itemValue) => 
                    setFormData({...formData, city: itemValue})}
                >
                    <Picker.Item label="Select City" value=""/>
                    <Picker.Item label="Toronto" value="Toronto"/>
                </Picker>

                <Text>Neighborhood: </Text>
                <Picker
                    style={{}}
                    selectedValue={formData.neighborhood}
                    onValueChange={(itemValue) => 
                    setFormData({...formData, neighborhood: itemValue})}
                >
                    <Picker.Item label="Select Neighborhood" value=""/>
                    <Picker.Item label="Neighborhood A" value="Neighborhood A"/>
                    <Picker.Item label="Neighborhood B" value="Neighborhood B"/>
                </Picker>

                <Text style={{ fontWeight: 'semibold'}}>[Agent Transaction History]</Text>
                {/*
                    TODO: This will serve the contents under Agent Transaction History
                    - Minimum Property Price : Free Text 
                    - Annual Sales $ :  Drop Down Menu with Rangers
                    - Annual Sales Volume: Free Text
                    - Awards : Free Text
                */}
                <TextInput
                    placeholder="Minimum Property Price"
                    // wiring up email address
                    value={formData.min_property_price}
                    onChangeText={(text) => setFormData({ ...formData, min_property_price: text})}
                />
                <Text>Annual Sales $</Text>
                <Picker
                    style={{}}
                    selectedValue={formData.annual_sales_range}
                    onValueChange={(itemValue) => 
                    setFormData({...formData, annual_sales_range: itemValue})}
                >
                    <Picker.Item label="price range" value=""/>
                    <Picker.Item label="0-50" value="0-50"/>
                    <Picker.Item label="50-100" value="50-100"/>
                    <Picker.Item label="100-200" value="100-200"/>
                </Picker>

                <TextInput
                    placeholder="Annual Sales Volume"
                    // wiring up annual sales volume
                    value={formData.annual_sales_volume}
                    onChangeText={(text) => setFormData({ ...formData, annual_sales_volume: text})}
                />
                <TextInput
                    placeholder="Awards"
                    value={formData.awards}
                    onChangeText={(text) => setFormData({ ...formData, annual_sales_volume: text})}
                />

                <Text style={{ fontWeight: 'semibold'}}>[Expertise Type]</Text>
                {/*
                    TODO: This will serve the contents under Expertise Type (Button/Radio button/Checklist??)
                    - Invest
                    - Buy
                    - Sell 
                    - Rent
                */}
                
                <Text style={{ fontWeight: 'semibold'}}>[Specific Property Type]</Text>
                {/*
                    TODO: This will serve the contents under Specific Property Type (Button/Radio button/Checklist??)
                    - Residential 
                    - Commercial
                    - Industrial
                    - Agriculture
                    - Mixed Use
                */}
                <Text style={{ fontWeight: 'semibold'}}>[Property Type]</Text>
                {/*
                    TODO: This will serve the contents under Property Type (Button/Radio button/Checklist??)
                    - Condos
                    - Detached
                    - Semi-Detached
                    - Town House
                    - Pre-Construction
                */}
                <Text style={{ fontWeight: 'semibold'}}>[Specific Sector Type]</Text>
                {/*
                    TODO: This will serve the contents under Specific Sector Type (Button/Radio button/Checklist??)
                    - Investment Properties 
                    - Luxury Properties
                    - Foreclosure
                */}
                <Text style={{ fontWeight: 'semibold'}}>[Client Type]</Text>
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
        fontSize: 18,
        fontWeight: 'bold'
    },
    pageLayout: { 
        padding: 20,
        marginTop: 25
    }, 
    language:{
        marginTop: 5
    },
    gender: {

    },
    availability:{

    },
    Brokerage: {

    },
    Degree: {

    }, 
    Certifications: {

    }, 
    Field: {

    },


});
