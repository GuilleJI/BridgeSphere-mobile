import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { TextInput } from 'react-native-gesture-handler';
import { useAppContext } from '../../../context/AppContext';

export default function BrokerageOnboarding(){
    const { dispatch } = useAppContext(); 
    const handleSave = () => {
        dispatch({type: "COMPLETE_ONBOARDING"}); // Mark onboarding as complete
        router.replace("/(tabs)"); // Send user to the main app tabs 
    }
    return (
        <ScrollView>
            {/* Section 1: Upload Video*/}
            <Text style={styles.sectionTitle}>1. Upload Video</Text>
            {/* Uploading video functionality needed */}
            <TextInput placeholder="Upload Video"/>
            
            {/* Section 2: Profile (Full Name + Upload photo)*/}
            <Text style={styles.sectionTitle}>2. Brokerage Full Name + Upload photo</Text>
            {/* Text Input */}
            <TextInput placeholder="Brokerage Full Name"/>
            {/* Uploading photo functionality needed */}
            <Text>Upload Photo Placeholder</Text>
            
            {/* Section 3: Brokerage Basic Information */}
            <Text style={styles.sectionTitle}>3. Brokerage Information</Text>
            {/* Free Text */}
            <TextInput placeholder="Email"/> 
            {/* Free Text */}
            <TextInput placeholder="Phone Number"/> 
            {/* Free Text */}
            <TextInput placeholder="Address"/> 
            {/* Calendar with Month and Year */}
            <TextInput placeholder="Established In"/> 
            {/* Links */}
            <TextInput placeholder="Social"/> 
            {/* Free Text */}
            <TextInput placeholder="Language Proficiency"/> 
            {/* Free Text */}
            <TextInput placeholder="Website"/> 
            
            {/* Section 4: Brokerage Professional Information */}
            <Text style={styles.sectionTitle}>4. Brokerage Professional Information</Text>
            <Text>Placeholder: Specialized Area</Text>
            {/*
                TODO: This will serve the contents under Specialized Area for future development (Button/Radio button/Checklist??)
                - Province : ON
                - City : Drop Down Menu
                - Neighborhood Code : Free Text
                - Neighborhood: Drop Down Menu
            */}
            <Text>Placeholder: Brokerage Program</Text>
            {/*
                TODO: This will serve the contents under Brokerage Program (Button/Radio button/Checklist??)
                - New Agent Mentorship
                - Team-Based Programs
                - Solo Agent Support
                - Luxury Real Estate Program
                - Commercial Real Estate Program
                - Investment & Rental Specialization
                - Franchise Model Support 
                - Virtual Brokerage Model
            */}
            <Text>Placeholder: Business Model</Text>
            {/*
                TODO: This will serve the contents under Business Model (Button/Radio button/Checklist??)
                - Traditional Brick-and-Mortar
                - Virtual Brokerage
                - Hybrid (In-Person & Virtual)
                - Team-Based Structure
                - Franchise-Based
                - Independence Boutique Brokerage 
            */}
            <Text>Placeholder: Key Services Offered</Text>
            {/*
                TODO: This will serve the contents under Key Services Offered (Button/Radio button/Checklist??)
                - MLS Access & Listing Support
                - Lead Generation & CRM Tools
                - Contract & Transaction Management 
                - In-House Legal & Compliance Assistance
                - Home Staging & Interior Design Support 
                - Mortgage & Financial Services
                - Property Management Services
                - Relocation & Concierge Services
            */}
            <Text>Placeholder: Technology Tools</Text>
            {/*
                TODO: This will serve the contents under Technology Tools (Button/Radio button/Checklist??)
                - CRM & Client Management Software
                - Automated Marketing & Social Media Tools
                - Virtual Tour & 3D Listing Technology 
                - E-Signature & Digital Documentation 
                - Mobile-Friendly Agent Dashboard
                - Transaction & Compliance Tracking
            */}
            <Text>Placeholder: Agent Support & Training</Text>
            {/*
                TODO: This will serve the contents under Agent Support & Training (Button/Radio button/Checklist??)
                - Weekly Coaching & Webinars
                - One-on-One Mentorship
                - In-Person Training Workshops
                - Online Learning Portal 
                - Advanced Sales & Negotiation Training 
                - AI & Digital Marketing Training 
                - Networking & Industry Events
            */}
            <Text>Placeholder: Referral Programs</Text>
            {/*
                TODO: This will serve the contents under Referral Programs (Button/Radio button)
                - Yes, Commission-Based Referral Program
                - Yes, Flat-Rate Bonus for Referrals 
                - Yes, Tiered Incentive Program 
                - No, We Do Not Offer Referral Programs
            */}
            <Text>Placeholder: Commission Structure</Text>
            {/*
                TODO: This will serve the contents under Commission Structure (Button/Radio button/Checklist??)
                - 100% Commission (Flat Monthly Fee)
                - Tiered Split (Based on Sales Volume)
                - Fixed Percentage Split (e.g., 80/20, 70/30)
                - Salary + Commission Model 
                - Revenue Share Model 
                - Custom Negotiable Structure
            */}
            <Text>Placeholder: Marketing Channels</Text>
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
            <Text>Placeholder: Recruitment Preferences</Text>
            {/*
                TODO: This will serve the contents under Recruitment Preferences (Button/Radio button/Checklist??)
                - New Agents (0-1 Years Experience)
                - Experienced Agents (2+ Years Experience)
                - High-Performing Top Producers
                - Team Leaders & Managing Brokers
                - Luxury & High-Net-Worth Specialists
                - Commercial Real Estate Experts
                - Niche Market Specialists (e.g., investment, relocation, rentals)
            */}
            <Text>Placeholder: Recruitment Preferences (Typo?)</Text>
            {/*
                TODO: This will serve the contents under Recruitment Preferences (Button/Radio button/Checklist??)
                - No Desk Fee
                - Flat Monthly Fee (e.g., $X per month)
                - Pay-Per-Transaction Fee
                - Percentage-Based Desk Fee (e.g., % of commission)
                - Hybrid Model (Combination of Monthly & Transaction Fee)
                - Negotiable Desk Fee
            */}
            
            {/* Section 5: What Sets Us Apart (multilined Text)*/}
            <Text style={styles.sectionTitle}>5. What Sets Us Apart</Text>
            <TextInput placeholder="[Multiline input goes here]"/>
            
            {/* Section 6: Brokerage Listings*/}
            <Text style={styles.sectionTitle}>6. Brokerage Listings</Text>
            {/* Adding photo upload functionality Required */}
            <Text>placeholder: Upload Photo</Text>
            {/* Text Input */}
            <TextInput placeholder="Listing Price"/>
            {/* Text Input */}
            <TextInput placeholder="Agent Name"/>
            {/* Text Input */}
            <TextInput placeholder="Listing Address"/>
            {/* Text Input */}
            <TextInput placeholder="#Beds"/>
            {/* Text Input */}
            <TextInput placeholder="#Bath"/>
            {/* Text Input */}
            <TextInput placeholder="#sqft"/>
            <Text>Placeholder: Sale or Rent button</Text>
            {/* Add new Card with the content above functionality*/}
            <Text>Placeholder: Add Button '(+)'</Text> 
            
            {/* Section 7: Choose the Perfect Plan for your Brokerage */}
            <Text style={styles.sectionTitle}>
                7. Choose the Perfect Plan for Your Brokerage
                Scale your Team, enhance recruitment, and access advanced analytics with our tailored subscription options.
            </Text>
            {/* TODO: Each card should have the perks per each plan, followed by a selection button which ideally would activate the plan during onboarding process */}
            <Text>Basic Plan</Text>
            <Text>Professional Plan</Text>
            <Text>Elite Plan</Text>
            
            {/* TODO: Button functionality seems to be to edit out a chosen plan */}
            <Text> Edit Subscription Button </Text>
            
            {/* Section 8: ??? (Cropped out) */}
            <Text style={styles.sectionTitle}>8. ??? Unclear</Text>
            <Text> Placeholder: ???</Text>
            {/*
                TODO: This will serve the contents under [????] 
                - Minimum Property Price $ : Free Text
                - Annual Sales $: Drop Down Menu with Ranges
                - Annual Sales Volume : Free Text
                - Awards : Free Text
            */}
            <Text>Placeholder: Expertise Type</Text>
            {/*
                TODO: This will serve the contents under Expertise Type (Button/Radio button/Checklist??)
                - Invest 
                - Buy
                - Sell
                - Rent
            */}
            <Text>Placeholder: Specific Property Type</Text>
            {/*
                TODO: This will serve the contents under Specific Property Type (Button/Radio button/Checklist??)
                - Residential 
                - Commercial 
                - Industrial 
                - Agriculture 
                - Mixed Use
            */}
            <Text>Placeholder: Property Type</Text>
            {/*
                TODO: This will serve the contents under Property Type (Button/Radio button/Checklist??)
                - Condos
                - Detached
                - Semi-Detached 
                - Town House 
                - Pre-Construction 
            */}
            <Text>Placeholder: Specific Sector Type</Text>
            {/*
                TODO: This will serve the contents under Specific Sector Type (Button/Radio button/Checklist??)
                - Investment Properties
                - Luxury Properties
                - Foreclosure 
            */}
            <Text>Placeholder: Client Type</Text>
            {/*
                TODO: This will serve the contents under Client Type (Button/Radio button/Checklist??)
                - First Time Home Buyer 
                - Luxury Buyer/Seller 
                - Investor
                - Business Owners
            */}
            <Text>Placeholder: Degree & Certifications</Text>
            {/*
                TODO: This will serve the contents under Degree & Certifications
                - Highest Degree : Drop Down Menu
                - Field of Study : Drop Down Menu
                - Certifications : Drop Down Menu
                - Gender : Drop Down Menu 
            */}
            
            {/* <Button title='Edit Profile' /> */}
            <Button title='Save Changes' onPress={handleSave} />
        </ScrollView>
        );
    };

    const styles = StyleSheet.create ({
        sectionTitle:{

        }
    });