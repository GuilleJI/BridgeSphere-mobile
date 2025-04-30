import { View, Text, Button, ScrollView, StyleSheet, TextInput} from 'react-native'; 
import { router } from 'expo-router';
import { useAppContext } from '../../../context/AppContext'; 



export default function AgentOnboarding(){
    const { dispatch } = useAppContext(); 
    const handleSave = () => {
        dispatch({type: "COMPLETE_ONBOARDING"}); // Mark onboarding as complete
        router.replace("/(tabs)"); // Send user to the main app tabs 
    }

    return(
        <ScrollView style={styles.Page}>
            {/* Section 1: Upload Video */}
            <Text style={styles.sectionTitle}>1. Upload Video</Text> 
            {/* Uploading video functionality needed */}
            <TextInput placeholder="Upload Video"/>
            
            {/* Section 2: Profile */}
            <Text style={styles.sectionTitle}>2. Profile</Text>
            {/* Text input  */}
            <TextInput placeholder="Agent Full Name"/>
            {/* Uploading photo functionality needed */}
            <Text>Upload Photo Placeholder</Text>
            
            {/* Section 3: Basic Information */}
            <Text style={styles.sectionTitle}>3. Basic Information</Text>
            {/* Free text input */}
            <TextInput placeholder="Email"/>
            {/* Free text input */}
            <TextInput placeholder="Phone Number"/>
            {/* Free text input */}
            <TextInput placeholder="Address"/>
            {/* Calendar with Month and Year */}
            <TextInput placeholder="Licensed Since"/>
            {/* Free text input */}
            <TextInput placeholder="Agent ID"/>
            {/* Free text input */}
            <TextInput placeholder="Brokerage"/> 
            {/* Free text input */}
            <TextInput placeholder="Language Proficiency"/>
            {/* Free text input */}
            <TextInput placeholder="Website"/> 
            {/* Links */}
            <TextInput placeholder="Social"/>
            {/* Drop Down Menu */}
            <TextInput placeholder="Gender"/> 
            
            {/* Section 4: Professional Information */}
            <Text style={styles.sectionTitle}>4. Professional Information</Text>
            <Text> Placeholder: Specialized Area</Text>
            {/*
                TODO: This will serve the contents under Specialized Area for future development 
                - Province : ON (set in stone due to being available in Ontario)
                - Neighbothood Code: Input text 
                - City : Drop Down Menu
                - Neighborhood : Drop Down Menu
            */}
            <Text>Placeholder: Expertise Type</Text>
            {/*
                TODO: This will serve the contents under Expertise Type (Selection button or Checklist?? Better ask Milad)
                - Rent
                - Invest 
                - Buy 
                - Sell 
            */}
            <Text>Placeholder: Specific Property Type</Text>
            {/*
                TODO: This will serve the contents under Specific Property Type (Selection button or Checklist?? Better ask Milad)
                - Residential
                - Commercial 
                - Industrial
                - Agriculture
                - Mixed Use
            */}
            <Text>Placeholder: Property Type</Text>
            {/*
                TODO: This will serve the contents under Property Type (Selection button or Checklist?? Better ask Milad)
                - Condos
                - Detached
                - Semi-Detached
                - Town House
                - Pre-Construction
            */}
            <Text>Placeholder: Specific Sector Type</Text>
            {/*
                TODO: This will serve the contents under Specific Sector Type (Selection button or Checklist?? Better ask Milad)
                - Investment Properties
                - Luxury Properties
                - Foreclosure
            */}
            <Text>Placeholder: Client Type</Text>
            {/*
                TODO: This will serve the contents under Client Type (Selection button or Checklist or ?? Better ask Milad)
                - First Time Home Buyer
                - Luxury Buyer/Seller
                - Investor 
                - Business Owners
            */}
            <Text>Placeholder: Degree & Certifications</Text>
            {/*
                TODO: This will serve the contents under Degree & Certifications
                - Highest Degree (Text Input)
                - Field of Study (Text Input)
                - Certifications (Text Input)
            */}
            
            {/* Section 5: Agent Transaction History */}
            <Text style={styles.sectionTitle}>5. Agent Transaction History</Text>
            {/* Free Text */}
            <TextInput placeholder="Minimum Property Price"/> 
            {/* Drop Down Menu with Rangers */}
            <TextInput placeholder="Annual Sales $"/> 
            {/* Free Text */}
            <TextInput placeholder="Annual Sales Volume"/> 
            {/* Free Text */}
            <TextInput placeholder="Awards"/> 
            
            {/* Section 6: Describe your Story and Expertise */}
            <Text style={styles.sectionTitle}>6. Describe Your Story and Expertise</Text>
            <TextInput placeholder='[multiline input goes here]'/>
            
            {/* Section 7: Agent Listings*/}
            <Text style={styles.sectionTitle}>7. Agent Listings</Text>
            {/* Uploading photo functionality needed */}
            <Text>placeholder: Upload Photo</Text> 
            {/* Text Input */}
            <TextInput placeholder="Listing Price"/> 
            {/* Text Input */}
            <TextInput placeholder="Listing Adress"/>
            {/* Text Input */}
            <TextInput placeholder="# Beds"/>
            {/* Text Input */}
            <TextInput placeholder="# Bath"/>
            {/* Text Input */}
            <TextInput placeholder="# sqft"/> 
            <Text>Placeholder: Sale or Rent button</Text>
            {/* Add new Card with the content above functionality*/}
            <Text>placeholder: Add button</Text> 
            
            {/* Section 8: Plans */}
            <Text style={styles.sectionTitle}>
                8. Choose the Right Plan to Boost Your Real Estate Career
            </Text>
            <Text>
                Elevate your visibility, generate high-quality leads, and access advanced tools with our tailored subscription options
            </Text>
            {/* TODO: Each card should have the perks per each plan, followed by a selection button which ideally would activate the plan during onboarding process */}
            <Text>Basic Plan</Text> 
            <Text>Professional Plan</Text>
            <Text>Elite Plan</Text>
            {/* TODO: Button functionality seems to be to edit out a chosen plan */}
            <Text> Edit Subscription Button </Text>
            
            {/* Section 8 : My Ideal Brokerage */}
            <Text style={styles.sectionTitle}>9. My Ideal Brokerage</Text>
            <Text>Placeholder: Brokerage program</Text>
            {/*
                TODO: This will serve the contents under Brokerage program (Button/Radio button/Checklist??)
                - New Agent Mentorship
                - Team-Based Programs
                - Solo Agent Support
                - Luxury Real Estate Program
                - Commercial Real Estate Program 
                - Investment & Rental Specialization
                - Franchise Model Support
                - Virtual Brokerage Model
            */}
            <Text> Placeholder: Business Model</Text>
            {/*
                TODO: This will serve the contents under Business Model (Button/Radio button/Checklist??)
                - Traditional Brick-and-Mortar
                - Virtual Brokerage
                - Hybrid (In-Person & Virtual)
                - Team-Based Structure
                - Franchise-Based
                - Independent Boutique Brokerage
            */}
            <Text> Placeholder: Key Services Offered</Text>
            {/*
                TODO: This will serve the contents under Key Services Offered (Button/Radio button/Checklist??)
                - MLS Access & Listinf Support 
                - Lead Generator & CRM Tools
                - Contract & Transaction Management 
                - ?????????? [Unclear]
            
            */}
            <Text>Placeholder: ??? </Text>
            {/*
                TODO: This will serve the contents under ???? [Unclear] (Button/Radio button/Checklist??)
                - Weekly Coaching & Webinars
                - One-on-One Mentorship
                - In-Person Training Workshops
                - Online Learning Portal
                - Advanced Sales & Negotiation Training 
                - AI & Digital Marketing Training 
                - Networking & Industry Events
            */}
            <Text> Placeholder: Referral Programs</Text>
            {/*
                TODO: This will serve the contents under Referral Programs (Button/Radio button)
                - Yes, Commission-Based Referral Program
                - Yes, Flat-Rate Bonus for Referrals
                - Yes, Tiered Incentive Program
                - No, We Do Not Offer Referral Programs
            
            */}
            <Text> Placeholder: Commission Structure</Text>
            {/*
                TODO: This will serve the contents under Commission Structure (Button/Radio button/Checklist??)
                - 100% Commission (Flat Monthly Fee)
                - Tiered Split (Based on Sales Volume)
                - Fixed Percentage Split (e.g., 80/20, 70/30)
                - Salary + Commission Model 
                - Revenue Share Model
                - Custom Negotiable Structure 
             */}
            <Text> Placeholder: Marketing Channels</Text>
            {/*
                TODO: This will serve the contents under Marketing Channels (Button/Radio button/Checklist??)
                - Paid Digital Advertising (Google, Facebook, Instagram)
                - Social Media Content & Strategy
                - Email Marketing Campaigns 
                - Print & Traditional Advertising 
                - SEO & Website Lead Generation 
                - Custom Branding & Design Support 
                - Personal Agent Website Creation 
            */}
            <Text> Placeholder: Recruitment Preferences</Text>
            {/*
                TODO: This will serve the contents under Recruitment Preferences (Button/Radio button/Checklist??)
                - New Agents (0-1 Years Experience)
                - Experience Agents (2+ Years Experience)
                - High-Performing Top Producers
                - Team Leaders & Managing Brokers
                - Luxury & High-Net-Worth Specialists
                - Commercial Real Estate Experts
                - Niche Market Specialists (e.g., investment, relocation, rentals)
            */}
            <Text> Placeholder: Recruitment Preferences?? typo?</Text>
            {/*
                TODO: This will serve the contents under Recruitment Preferences (pressumed typo) (Button/Radio button/Checklist??)
                - No Desk Fee
                - Flat Monthly Fee (e.g., $X per month)
                - Pay-Per-Transaction Fee
                - Percentage-Based Desk Fee (e.g., % of commission)
                - Hybrid Model (Combination of Monthly & Transaction Fees)
                - Negotiable Desk Fee
            */}
            
            {/* Render Edit Profile */}
            {/* <Button title ="Edit Profile"/> */}
            {/* Render Save button; on press, routes to the user profile as an agent */}
            <Button title="Save Changes" onPress={handleSave}/>
        </ScrollView>     
    );
};

const styles = StyleSheet.create ({
    sectionTitle:{
        fontSize: 16
    },
    Page: {
        
        marginTop: 10,
        
    }
});