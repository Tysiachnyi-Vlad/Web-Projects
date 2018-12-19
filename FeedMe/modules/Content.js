import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
//------//

import Dishes from './dishes';
////////////////////////////////////

export default class Content extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <Dishes />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 7
    }
})

