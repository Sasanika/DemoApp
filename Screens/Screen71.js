import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import 'react-native-gesture-handler';

function Screen71(props) {
  return (
    <View style={{flex: 1 ,backgroundColor: 'white', padding:15 }}>
        <TouchableOpacity
        onPress={() => props.navigation.replace('Screen7')} // Use navigation.replace here
        style={{ position: 'absolute', top: 15, left: 20, zIndex: 1 }}
      >
        <Icon name="arrow-left" size={30} color="red" />
      </TouchableOpacity>
      <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Terms of Service for ShareSpace</Text>
        <Text style={styles.lastUpdated}>Last Updated: [24th September 2022]</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. Use of the Service</Text>
        <Text>
          a. Eligibility: You must be of legal age and have the legal capacity to enter into a binding agreement to use the Service. By using the Service, you represent and warrant that you meet these eligibility requirements.
        </Text>

        <Text>
          b. Account Registration: To access certain features of the Service, you may need to create an account. You are responsible for providing accurate and complete information during the registration process and maintaining the confidentiality of your account credentials.
        </Text>


        <Text>
          c. Permitted Use: You may use the Service for lawful purposes only. You agree not to use the Service in any manner that violates any applicable laws, regulations, or the rights of others.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. Intellectual Property Rights</Text>
        <Text>
          a. Ownership: ShareSpace and all related software, design elements, trademarks, and copyrights are the exclusive property of CodeCore.
        </Text>

        <Text>
          b. License: Subject to these Terms, CodeCore grants you a limited, non-exclusive, non-transferable, non-sublicensable license to use the Service.
        </Text>
      </View>

      <View style={styles.section}>
  <Text style={styles.sectionTitle}>3. User Conduct</Text>
  <Text>
    a. Prohibited Activities: You agree not to engage in any of the following prohibited activities while using our Service:
  </Text>

  <Text>
    - Violating any applicable laws, regulations, or third-party rights.
  </Text>

  <Text>
    - Transmitting any content that is harmful, offensive, or infringing on intellectual property rights.
  </Text>

  <Text>
    - Attempting to gain unauthorized access to our systems or user accounts.
  </Text>

  <Text>
    - Engaging in any activity that disrupts or interferes with the proper functioning of the Service.
  </Text>
</View>

<View style={styles.section}>
  <Text style={styles.sectionTitle}>4. Content and Ownership</Text>
  <Text>
    a. User Content: By submitting content to our Service, you grant us a non-exclusive, worldwide, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute such content for the purpose of operating and improving the Service.
  </Text>

  <Text>
    b. Intellectual Property: Our Service contains intellectual property owned by us, including trademarks, copyrights, and proprietary information. You agree not to use our intellectual property without our prior written consent.
  </Text>
</View>

<View style={styles.section}>
  <Text style={styles.sectionTitle}>5. Privacy Policy</Text>
  <Text>
    a. Data Collection: We collect and process user data in accordance with our Privacy Policy, which is an integral part of these Terms. By using our Service, you consent to the data practices outlined in our Privacy Policy.
  </Text>
</View>

<View style={styles.section}>
  <Text style={styles.sectionTitle}>6. Termination</Text>
  <Text>
    a. Termination by Us: We reserve the right to terminate or suspend your account and access to the Service at our sole discretion, with or without cause, and without notice.
  </Text>

  <Text>
    b. Termination by You: You may terminate your account by contacting us or following the account termination instructions provided in the Service.
  </Text>
</View>

<View style={styles.section}>
  <Text style={styles.sectionTitle}>7. Disclaimers and Limitations of Liability</Text>
  <Text>
    a. No Warranty: We provide the Service "as is" and without any warranty or condition, express, implied, or statutory.
  </Text>

  <Text>
    b. Limitation of Liability: We shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
  </Text>
</View>


    </ScrollView>

      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:35,
    flex: 1,
  },
  
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  lastUpdated: {
    fontSize: 14,
    marginBottom: 20,
  },
  
   
  
});

export default Screen71;