import { View, Text, Button, ScrollView} from 'react-native'; 
import { router } from 'expo-router';

export default function AgentOnboarding(){
    return(
        <ScrollView>
            <View>
                <Text>
                    <h2>Build Your Professional Profile</h2>
                    <h4>Showcase your expertise and connect with high-value clients</h4>
                </Text>
                <Text>
                    <h3>**[Upload an Introduction Video]**</h3>
                </Text>
                <br/>
                <Text>
                    <h3>**[Agent Full Name + Upload Photo]**</h3>
                </Text>
                <br/>
                <Text>
                    <h3>**[Basic Information]**</h3>
                    <h6>Email (Free Text)</h6>
                    <h6>Phone Number (Free Text)</h6>
                    <h6>Address(Free Text)</h6>
                    <h6>Licensed Since(Calendar with Month and Year)</h6>
                    <h6>Agent ID (Free Text)</h6>
                    <h6>Brokerage (Free Text)</h6>
                    <h6>Language Proficiency (Free Text)</h6>
                    <h6>Website (Free Text)</h6>
                    <h6>Social (Links)</h6>
                    <h6>Gender (Drop Down Menu)</h6>
                </Text>
                <br/>
                <Text>
                    <h3>**[Professional Information]**</h3>
                    <h4>Specialized Area- </h4>
                    <h6>Province: ON</h6>
                    <h6>Neighborhood Code</h6>
                    <h6>City (Drop Down Menu)</h6>
                    <h6>Neighborhood (Drop Down Menu)</h6>
                    <br/>

                    <h4>Expertise Type-</h4>
                    <h6>Rent</h6>
                    <h6>Invest</h6>
                    <h6>Buy</h6>
                    <h6>Sell</h6>
                    <br/>

                    <h4>Specific Property Type-</h4>
                    <h6>Residential</h6>
                    <h6>Commercial</h6>
                    <h6>Industrial</h6>
                    <h6>Agriculture</h6>
                    <h6>Mixed Use</h6>
                    <br/>

                    <h4>Property Type-</h4>
                    <h6>Condos</h6>
                    <h6>Detached</h6>
                    <h6>Semi-Detached</h6>
                    <h6>Town House</h6>
                    <h6>Pre-Construction</h6>
                    <br/>

                    <h4>Specific Sector Type-</h4>
                    <h6>Investment Properties</h6>
                    <h6>Luxury Properties</h6>
                    <h6>Foreclosure</h6>
                    <br/>

                    <h4>Client Type</h4>
                    <h6>First Time Home Buyer</h6>
                    <h6>Luxury Buyer/Seller</h6>
                    <h6>Investor</h6>
                    <h6>Business Owners</h6>
                    <br/>

                    <h4>Degree & Certifications-</h4>
                    <h6>Highest Degree:</h6>
                    <h6>Certifications:</h6>
                    <h6>Field of Study:</h6>
                </Text>
                <br/>
                <Text>
                    <h3>**[Agent Transaction History]**</h3>
                    <h6>Minimum Property Price (Free Text)</h6>
                    <h6>Annual Sales $ (Drop Down Menu with Rangers)</h6>
                    <h6>Annual Sales Volume (Free Text)</h6>
                    <h6>Awards (Free Text)</h6>
                </Text>
                <br/>
                <Text>
                    <h3>**[Describe Your Story and Expertise](Multi-line Free Text)**</h3>
                </Text>
                <br/>
                <Text>
                    <h3>**[Agent Listings + Upload Photo]**</h3>
                    <h4>Listing Price (Free Text)</h4>
                    <h6>Listing Address (input fields for Beds, Baths. and sqft)</h6>
                    <h5>[Sale or Rent Button]</h5>
                    <h5>[ + add card, meaning a new Agent Listing Field ]</h5>
                </Text>
                <br/>
                <Text>
                    <h3>**[Choose the Right Plan to Boost Your Real Estate Career ( 3 Membership plans)]**</h3>
                    <h4>Elevate your visibility, generate high-quality leads, and access advanced tools with our tailored subscription options.</h4>
                    <h5>Basic Plan Card</h5>
                    <h5>Professional Plan Card</h5>
                    <h5>Elite Plan Card</h5>
                </Text>
                <br/>
                <Text>
                    <h3>**[My Ideal Brokerage]**</h3>
                
                    <h4>Brokerage Program-</h4>
                    <h6>New Agent Mentorship</h6>
                    <h6>Team-Based Programs</h6>
                    <h6>Solo Agent Support</h6>
                    <h6>Luxury Real Estate Program</h6>
                    <h6>Commercial Real Estate Program</h6>
                    <h6>Investment & Rental Specialization</h6>
                    <h6>Franchise Model Support</h6>
                    <h6>Virtual Brokerage Model</h6>
                    <br/>

                    <h4>Business Model-</h4>
                    <h6>Traditional Brick-and-Mortar</h6>
                    <h6>Virtual Brokerage</h6>
                    <h6>Hybrid(In-Person & Virtual)</h6>
                    <h6>Team-Based Structure</h6>
                    <h6>Franchise-Based</h6>
                    <h6>Independent Boutique Brokerage</h6>
                    <br/>

                    <h4>Key Services Offered-</h4>
                    <h6>MLS Access & Listing Support</h6>
                    <h6>Lead Generation & CRM Tools</h6>
                    <h6>Contract & Transaction Management</h6>
                    <h6>In House Local & Compliance Assistance</h6>
                    <h6>????</h6>
                    <h6>????</h6>
                    <br/>

                    <h4>??? (Overlapped element - not readable)</h4>
                    <h6>Weekly Coaching & Webinars</h6>
                    <h6>One-on-One Mentorship</h6>
                    <h6>In-Person Training Workshops</h6>
                    <h6>Online Learning Portal</h6>
                    <h6>Advanced Sales & Negotiation Training</h6>
                    <h6>AI & Digital Marketing Training</h6>
                    <h6>Networking & Industry Events</h6>
                    <br/>

                    <h4>Referral Programs-</h4>
                    <h6>Yes, Commision-Based Referral Program</h6>
                    <h6>Yes, Flat-Rate Bonus for Referrals</h6>
                    <h6>Yes, Tiered Incentive Program</h6>
                    <h6>No, We Do Not Offer Referral Programs</h6>
                    <br/>

                    <h4>Commission Structure-</h4>
                    <h6>100% Comission (Flat Monthly Fee)</h6>
                    <h6>Tiered Split (Based on Sales Volume)</h6>
                    <h6>Fixed Percentage Split (e.g., 80/20, 70/30)</h6>
                    <h6>Salary + Commission Model</h6>
                    <h6>Revenue Share Model</h6>
                    <h6>Custom Negotiable Structure</h6>
                    <br/>

                    <h4>Marketing Channels-</h4>
                    <h6>Paid Digital Advertising (Google, Facebook, Instagram)</h6>
                    <h6>Social Media Content & Strategy</h6>
                    <h6>Email Marketing Campaigns</h6>
                    <h6>Print & Traditional Advertising</h6>
                    <h6>SEO & Website Lead Generation</h6>
                    <h6>Custom Branding & Design Support</h6>
                    <h6>Personal Agent Website Creation</h6>
                    <br/>

                    <h4>Recruitment Preferences-</h4>
                    <h6>New Agents (0-1 Years Experience)</h6>
                    <h6>Experienced Agents (2+ Years Experience)</h6>
                    <h6>High-Performing Top Producers</h6>
                    <h6>Team Leaders & Managing Brokers</h6>
                    <h6>Luxury & High-Net-Worth Specialists</h6>
                    <h6>Commercial Real Estate Experts</h6>
                    <h6>Niche Market Specialists (e.g., Investment, relocation, rentals)</h6>
                    <br/>

                    <h4>Recruitment Preferences (repetition perhaps a typo)</h4>
                    <h6>No Desk Fee</h6>
                    <h6>Flat Monthly Fee (e.g., $X per month)</h6>
                    <h6>Pay-Per-Transaction Fee</h6>
                    <h6>Percentage-Based Desk Fee (e.g., % of commission)</h6>
                    <h6>Hybrid Model (Combination of Monthly & Transaction Fees)</h6>
                    <h6>Negotiable Desk Fee</h6>

                    

                </Text>
                <br/>
                {/* Render Save button; on press, routes to the user profile as an agent */}
                <Button title="Save Changes" onPress={()=> router.push('/(tabs)')}/>
            </View>
        </ScrollView>
        
    )
}