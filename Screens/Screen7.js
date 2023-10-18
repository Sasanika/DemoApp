import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';

const openWebsite = () => {
  Linking.openURL('https://example.com');
};

const sendEmail = () => {
  Linking.openURL('mailto:sasanikaruwanthi@gmail.com');
};

function Screen7(props) {
  return (
    <View style={styles.container}>
      
      <ScrollView style={{ flex: 1 }}>
        {/* Go to Website */}
        <TouchableOpacity onPress={openWebsite}>
          <Text style={styles.linkText}>1. Go to Website</Text>
        </TouchableOpacity>

        {/* Email Us */}
        <TouchableOpacity onPress={sendEmail}>
          <Text style={styles.linkText}>2. Email Us</Text>
        </TouchableOpacity>

        {/* Terms & Conditions */}
        <TouchableOpacity onPress={() => props.navigation.replace('TermsAndServices')}>
          <Text style={styles.linkText}>3. Terms & Conditions</Text>
        </TouchableOpacity>

        {/* FAQ Section */}
        <View style={styles.faqSection}>
          <Text style={styles.faqTitle}>FAQ</Text>

          {/* Question 1 */}
          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Q: How can I book a meeting room?</Text>
            <Text>A: To book a meeting room, simply log in to your ShareSpace account, navigate to the "Book a Space" section, select the desired room, date, and time, and click "Book Now." You'll receive a confirmation once the booking is successful.</Text>
          </View>

          {/* Question 2 */}
          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Q: Can I modify or cancel a booking?</Text>
            <Text>A: Yes, you can modify or cancel a booking. Go to the "My Bookings" section, locate the booking you wish to change, and click on "Edit" or "Cancel" to make the necessary adjustments.</Text>
          </View>

          {/* Question 3 */}
          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Q: How do I reset my password?</Text>
            <Text>A: If you've forgotten your password, you can reset it by clicking on the "Forgot Password" link on the login page. Follow the instructions sent to your registered email to create a new password.</Text>
          </View>

          {/* Question 4 */}
          <View style={styles.faqItem}>
            <Text style={styles.faqQuestion}>Q: What payment methods are accepted?</Text>
            <Text>A: We accept various payment methods, including credit cards (Visa, MasterCard, American Express) and PayPal. You can choose your preferred payment method during the booking process.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'blue',
    padding: 16,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
  },
  faqSection: {
    padding: 16,
  },
  faqTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 7,
  },
  faqItem: {
    marginBottom: 16,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Screen7;
