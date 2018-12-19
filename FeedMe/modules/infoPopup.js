import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView} from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
/////--------////
import data from '../data/data_en';
//////-------/////

export default class InfoPopup extends Component{
    constructor(props){
        super();
        this.state = {};
        this.id = props.id;
    }

////RENDER/////
    render(){
        return(
            <View style={styles.infoView}>
                <View style={styles.closeContainer}>
                    <TouchableOpacity onPress={()=> {this.props.close()}}>
                        <ResponsiveImage source={require('../assets/menu_icons/close_icon.png')} initWidth="30" initHeight="30"></ResponsiveImage>
                    </TouchableOpacity>
                </View>
                <View style={styles.bigImageContainer}>
                    <ResponsiveImage source={data.dishes[this.id].image} initWidth="156" initHeight="156"></ResponsiveImage>
                </View>

                <View style={styles.contentContainer}>
                    <ScrollView>
                        <Text style={styles.title}>{data.dishes[this.id].title}</Text>
                        <Text style={styles.small_title}>{data.dishes[this.id].ingredients_title}</Text>
                        <Text style={styles.text}>{data.dishes[this.id].ingredients}</Text>
                        <Text style={styles.small_title}>{data.dishes[this.id].instructions_title}</Text>
                        <Text style={styles.text}>{data.dishes[this.id].instructions}</Text>
                    </ScrollView>
                </View>
                <View style={styles.addReciep}> 
                    <TouchableOpacity style={styles.addBbtn} onPress={() => {}}>
                        <Text style={styles.addBbtnText}>Add to my list</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    addBbtn: {
        backgroundColor: '#91d00f',
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
        height: 30
    },
    addBbtnText: {
        color: 'white',
        fontWeight: 'bold'
    },
    closeImage: {
        width: 30,
        height: 30
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    },
    small_title: {
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 10
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 17,
        marginBottom: 10
    },
    bigImageContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: 5
    },
    contentContainer: {
        flex: 7,
        padding: 5,
        alignItems: 'center'
    },
    addReciep: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    closeContainer: {
        height: 20,
        alignItems: 'flex-end',
        paddingRight: 5,
        paddingTop: 2
    },
    bigImage: {
        width: 160,
        height: 160,
        borderRadius: 10
    },
    infoView: {
        position: 'absolute',
        width: Dimensions.get('window').width - 10,
        height: Dimensions.get('window').height < 570 ? Dimensions.get('window').height - 140 : Dimensions.get('window').height - 260,
        marginTop: Dimensions.get('window').height < 570 ? 5 : 30,
        marginLeft: 5,
        backgroundColor: '#f58309',
        borderRadius: 10
    }

})