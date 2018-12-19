import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback, StyleSheet, Dimensions} from 'react-native';
//------//

export default class Header extends Component{
    render(){
        return(
            <View style={styles.header}>
                <Image></Image>
                <TouchableWithoutFeedback onPress={() => {}}>
                    <Image source={require('../assets/menu_icons/add_icon.png')} style={styles.addIcon}></Image>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: Dimensions.get('window').height < 570 ? 10 : 22,
        paddingRight: 20,
        backgroundColor: "#f58309"
    },
    addIcon: {
        width: 28,
        height: 28
    }
})

