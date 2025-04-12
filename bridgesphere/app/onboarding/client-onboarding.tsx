import { View, Text, Button, ScrollView } from 'react-native'; 
import { router } from 'expo-router';

export default function ClientOnboarding(){
    return(
        <ScrollView>
            <View>
                <Text>
                    <h2>Build Your Profile to Find the Right Agent</h2>
                    <h4>Tell us your preferences to connect with agents who fit your needs</h4>
                </Text>
                <Text>
                    <h3>**[Client Full Name and Upload Photo]</h3>
                </Text>
                <br/>
                <Text>
                    <h3>**[Basic Information]</h3>
                    <h6>Email (Free Text)</h6>
                    <h6>Phone Number (Free Text)</h6>
                    <h6>Address (Free Text)</h6>
                    <h6>Language Proficiency (Drop Down Menu)</h6>
                </Text>
                <br/>
                <Text>
                    <h3>**[My Ideal Agent]</h3>
                    <h4>Basic Information</h4>
                    <h6>Gender (Drop Down Menu)</h6>
                    <h6>Availability (Drop Down Menu)</h6>
                    <h6>Brokerage (Drop Down Menu)</h6>
                    <h6>Language Proficiency (Drop Down Menu)</h6><br/>

                    <h4>Degree & Certification</h4>
                    <h6>Highest Degree (Drop Down Menu)</h6>
                    <h6>Certifications (Drop Down Menu)</h6>
                    <h6>Field of Study (Drop Down Menu)</h6>
                    <h6>Gender (Drop Down Menu)</h6><br/>

                    <h4>Specialized Area</h4>
                    <h6>Province (Drop Down Menu)</h6>
                    <h6>Neighborhood Code (Drop Down Menu)</h6>
                    <h6>City (Drop Down Menu)</h6>
                    <h6>Neighborhood (Drop Down Menu)</h6><br/>

                    <h4>Agent Transaction History</h4>
                    <h6>Minimum Property Price (Free Text)</h6>
                    <h6>Annual Sales $ (Drop Down Menu with Rangers)</h6>
                    <h6>Annual Sales Volume (Free Text)</h6>
                    <h6>Awards (Free Text)</h6><br/>

                    <h4>Expertise Type (Checkbox?)</h4>
                    <h6>Invest</h6>
                    <h6>Buy</h6>
                    <h6>Sell</h6>
                    <h6>Rent</h6><br/>

                    <h4>Specific Property Type (Checkbox?)</h4>
                    <h6>Residential</h6>
                    <h6>Commercial</h6>
                    <h6>Industrial</h6>
                    <h6>Agriculture</h6>
                    <h6>Mixed Use</h6><br/>

                    <h4>Property Type (Checkbox?)</h4>
                    <h6>Condos</h6>
                    <h6>Detached</h6>
                    <h6>Semi-Detached</h6>
                    <h6>Town House</h6>
                    <h6>Pre-Construction</h6><br/>

                    <h4>Specific Sector Type (Checkbox?)</h4>
                    <h6>Investment Properties</h6>
                    <h6>Luxury Property</h6>
                    <h6>Foreclosure</h6><br/>

                    <h4>Client Type (Checkbox?)</h4>
                    <h6>First Time Home Buyer</h6>
                    <h6>Luxury Buyer/Seller</h6>
                    <h6>Investor</h6>
                    <h6>Business Owners</h6><br/>
                </Text>
                <br/>
                <Button title='Save Changes' onPress={()=> router.push('/(tabs)')}/>
            </View>
        </ScrollView>
        
    );
}