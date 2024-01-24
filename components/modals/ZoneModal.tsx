import React from "react";
import { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Pressable, StyleSheet, Image, StatusBar, Modal } from "react-native";
import GestureRecognizer from 'react-native-swipe-gestures';

export default function ZoneModal({navigation, zone, zoneModalVisible, setZoneModalVisible, currentCity}) {
    const [zoneType, setZoneType] = useState(null);
    const [taxRates, setTaxRates] = useState(null);
    const [zoneText, setZoneText] = useState(null);



    useEffect(() => {
        function getZoneData() {
            if (zone) {
                setZoneType(zone['zoneType'])
                setTaxRates(currentCity['taxRates'])

                if (taxRates) {
                    if (taxRates[`${zoneType}Rate`] > 0) {
                        setZoneText(`Parking here will cost ${taxRates[`${zoneType}Rate`]}TL`)
                    } else {
                        setZoneText(`Park here to reduce ${taxRates[`${zoneType}Rate`]}TL from your trip`)
                    }
                }
                
            }
        }
        getZoneData();
    });


    
    return (
        <GestureRecognizer
            style={{flex: 1}}
            onSwipeDown={ () => setZoneModalVisible(false) }
        >
        <Modal
        animationType="slide"
        transparent={true}
        visible={zoneModalVisible}
        onRequestClose={() => {
            setZoneModalVisible(!zoneModalVisible)
        }}

        >
            <View style={styles.modalContainer}></View>


            <View style={styles.modalMessage}>
            <View style={styles.swipeButton}></View>

                <View style={styles.titleContainer}>
                    <View style={styles.textContainer}>
                    </View>

                </View>
                
                <Text style={{color: 'grey'}}> {zoneType}: {zoneText}</Text>
 
                <Pressable 
                style={styles.tourButton} 
                onPress={() => setZoneModalVisible(false)}
                >
                    <Text style={{color: 'white', fontWeight: 'bold'}}>OK</Text>
                </Pressable>

                
            </View>
        </Modal>
    </GestureRecognizer>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        height: '100%',
        flex: 1,
    },

    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 30
    },

    swipeButton: {
        width: '25%',
        height: 5,
        backgroundColor: 'lightgrey',
        borderRadius: 25
    },

    textContainer: {
        width: '45%',
        marginBottom: 10,
    },

    modalMessage: {
        backgroundColor: 'white',
        width: '100%',
        height: '25%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },

    scooterTitle: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 16
    },
    
    battery: {
        marginLeft: 5,
    },

    scooterImage: {
        margin: 10
    },

    tourButton: {
        backgroundColor: 'cornflowerblue',
        width: '80%',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
})