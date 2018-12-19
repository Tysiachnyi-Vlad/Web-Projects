import React, {Component} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
//------//

import MenuButtons from './menuButtons';

export default class Footer extends Component{
    render(){
        return(
            <View style={styles.container}>
            <MenuButtons />
            <View style={styles.spacer}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    spacer: {
        flex: Dimensions.get('window').height < 570 ? 0 : 1,
        backgroundColor: '#f2f1f1'
    }
})

