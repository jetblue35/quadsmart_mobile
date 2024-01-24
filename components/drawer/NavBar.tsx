import React from "react";
import { useState, useEffect } from 'react';
import { ScrollView, Image, Text, View, StyleSheet, StatusBar, Button, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import HowModal from "../modals/HowModal";



export default function NavBar({navigation, mapRef, position}) {
    const [howModal, setHowModal] = useState(false);

    function DrawerButton({navigation}) {
        return (
          <Pressable style={[styles.drawer, styles.shadowProp]} onPress={() => navigation.openDrawer()}> 
            <Icon 
            name='three-bars' 
            size={20} 
            color='black'
            />
          </Pressable>
        );
      };

      function HowToDrive({navigation}) {
        return (
            <Pressable style={[styles.info, styles.shadowProp]} onPress={() => setHowModal(!howModal)}>
                <Icon 
                    name='question' 
                    size={16} 
                    color='black'
                />
                <Text style={{marginLeft: 8}}>How to drive?</Text>
            </Pressable>
        )
      }

      function Location({navigation}) {
        return (
            <Pressable style={[styles.drawer, styles.shadowProp]} onPress={() => {
              mapRef.current.animateToRegion({
                latitude: position.latitude? position.latitude : 40.819278,
                longitude: position.longitude? position.longitude : 29.356835,
                latitudeDelta: 0.03,
                longitudeDelta: 0.03,
              })
            }}> 
              <Icon 
              name='location' 
              size={20} 
              color='black'
              />
            </Pressable>
          );
      }

    return (
        <View style={styles.container}>
            <DrawerButton navigation={navigation}/>
            <HowToDrive navigation={navigation}/>
            <Location navigation={navigation}/>
            <HowModal navigation={navigation} modalVisible={howModal} setModalVisible={setHowModal}></HowModal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'space-evenly',
        width: '100%',
        flexDirection: 'row',
    },
    info: {
        width: 250,
        height: 40, 
        backgroundColor: 'white',
        marginTop: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    drawer: {
        width: 40,
        height: 40, 
        backgroundColor: 'white',
        marginTop: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    shadowProp: {
        elevation: 5,
        shadowColor: 'black'
      },
});