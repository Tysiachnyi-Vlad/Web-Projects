import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
//------//


export default class MenuButtons extends Component{
    constructor(){
        super();
        this.state = {};
    }


    buttonPressed(buttonId){
        alert(buttonId);
    }


    render(){
        return(
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={()=>{}}>
                        <Image source={require('../assets/menu_icons/food_list_icon.png')} style={styles.img}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                        <Image source={require('../assets/menu_icons/ingredients_icon.png')} style={styles.img}></Image>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonsContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f2f1f1'
    },
    img: {
        width: 53,
        height: 53
    },
    languageContainer:{
        flexDirection: 'row'
    },
    languageText: {
        fontSize: 40
    }
})