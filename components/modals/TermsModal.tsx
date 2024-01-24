import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Modal, TextInput, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';


export default function TermsModal({navigation, modalVisible, setModalVisible, termsVisible}) {
    const [text, setText] = useState(null);

    useEffect(() => {
        function getText(): void {
            // Determine what text file to display
            (termsVisible) ? setText(terms_conditions) : setText(privacy_policy);            
        };

        getText();
    })


    return (
        <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
            setModalVisible(!modalVisible);
        }}
        >
            <View style={styles.modalContainer}>

                <View style={[styles.messageContainer, styles.shadowProp]}>
                    <Pressable style={[styles.backButton, styles.shadowProp]} onPress={() => setModalVisible(!modalVisible)}>
                    <Icon 
                        name='x' 
                        size={20} 
                        color='black'
                    />
                    </Pressable>
                    <ScrollView style={styles.textContainer}>
                        <Text> {text} </Text>
                    </ScrollView>
                    
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        height: '100%', 
        width: '100%', 
        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
        position:'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },

    messageContainer: {
        backgroundColor: 'white',
        width: '90%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    shadowProp: {
        elevation: 5,
        shadowColor: 'black'
    },

    title: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        textAlign: 'left',
        width: '80%',
        marginTop: 20
    },

    prepaidButton: {
        backgroundColor: 'black',
        width: '90%',
        height: 50,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },

    text: {
        textAlign: 'left',
        width: '100%',
        fontSize: 16
    },

    textContainer: {
        width: '90%',
        marginTop: 10,
        marginBottom: 10
    },
    
    backButton: {
        position: 'absolute',
        width: 30,
        height: 30, 
        left: -15,
        backgroundColor: 'white',
        top: -15,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
    },
})

const privacy_policy = `

Terms of Service for QuadSmart: Empower Your Journey Bike Rental App

Last Updated: 21.01.2024

1. Introduction
Welcome to QuadSmart, where we blend the joy of four wheels with the thrill of two! By using our app, you're agreeing to these ridiculously entertaining Terms of Service (TOS). If you don't agree, you'll miss out on some fantastic, fun-filled rides.

2. Eligibility for Riding
2.1. Age: You must be old enough to reach the pedals and young enough at heart to appreciate a good chuckle.
2.2. Skills: The ability to ride a bike while chuckling is preferred but not mandatory.

3. Account Registration
When registering, pick a username that sparks joy - something like "GigglingRider" or "QuadComedian." Gloomy usernames are frowned upon here!

4. Bike Usage
4.1. Our QuadSmart bikes are equipped with a "giggle-gear." The more you giggle, the smoother the ride.
4.2. Juggling while riding is not advised, but if you're a pro, we'll pretend we didn't see it.

5. Payments and Fees
5.1. Standard rental fees apply, but if you share a rib-tickling joke, you might unlock a surprise discount.
5.2. Late return fees come with a frown, especially if you don't bring the bike back smiling.

6. Safety and Responsibilities
6.1. Helmets, adorned with humorous stickers, are mandatory.
6.2. Please refrain from feeding the bikes; they're strictly on a laughter diet.

7. Prohibited Activities
7.1. Wearing a long face while riding is prohibited.
7.2. Racing turtles is not allowed; they're sensitive about their speed.

8. Maintenance and Damage
If your bike starts giggling along with you, it's in peak condition. If it's too quiet, contact us, and we'll send our comedic mechanic.

9. Termination of Service
We reserve the right to discontinue service if you're excessively serious. QuadSmart is all about the fun.

10. Changes to Terms of Service
We may revise these terms to include more puns and jokes.

11. Contact Information
Need support or a daily dose of humor? Reach us at: smiles@quadsmart.com.

12. The Mandatory Legalese
Yes, this is a legal agreement, but remember, we're here to make biking a laugh riot.

13. Acknowledgment
By choosing QuadSmart, you agree that every ride should be a joyride.

Ride, Laugh, and Be QuadSmart! 🚴‍♀️😄🎈
`;

const terms_conditions = `
Terms & Conditions
By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to copy or modify the app, any part of the app, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages or make derivative versions. The app itself, and all the trademarks, copyright, database rights, and other intellectual property rights related to it, still belong to SparkRentals AB.

SparkRentals AB is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for.

The SparkRentals app stores and processes personal data that you have provided to us, to provide our Service. It’s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the SparkRentals app won’t work properly or at all.

The app does use third-party services that declare their Terms and Conditions.

Link to Terms and Conditions of third-party service providers used by the app

Google Play Services
Facebook
Expo
You should be aware that there are certain things that SparkRentals AB will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi or provided by your mobile network provider, but SparkRentals AB cannot take responsibility for the app not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left.

If you’re using the app outside of an area with Wi-Fi, you should remember that the terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third-party charges. In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the app, please be aware that we assume that you have received permission from the bill payer for using the app.

Along the same lines, SparkRentals AB cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, SparkRentals AB cannot accept responsibility.

With respect to SparkRentals AB’s responsibility for your use of the app, when you’re using the app, it’s important to bear in mind that although we endeavor to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. SparkRentals AB accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.

At some point, we may wish to update the app. The app is currently available on Android & iOS – the requirements for the both systems(and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the app. SparkRentals AB does not promise that it will always update the app so that it is relevant to you and/or works with the Android & iOS version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.

Changes to This Terms and Conditions

We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.

These terms and conditions are effective as of 2022-11-01

Contact Us

If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at sparkrentals@gmail.com.

This Terms and Conditions page was generated by App Privacy Policy Generator
`