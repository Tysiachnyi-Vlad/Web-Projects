import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
//------//

import data from '../data/data_en';
import InfoPopup from './infoPopup';

export default class Dishes extends Component{
    constructor(){
        super();
        this.state = {
            openedField: null
        };

        this.closeField = this.closeField.bind(this);
    }
///////CLOSE dish information///
    closeField(){
        this.setState({
            openedField: null
        })
    }

////////OPEN more information about dish
    openField(id){
        this.setState({
            openedField: <InfoPopup id={id} close={this.closeField} />
        })
    }

///////////RENDER////////////
    render(){
        return (
            <View style={styles.dishesContainer}>
                {
                    data.dishes.map((elem, i) => {
                        const dishField = <TouchableOpacity key={i} onPress={()=>{this.openField(elem.id)}}>
                            <View style={styles.field}>
                                <Image source={elem.image} style={styles.imageIcon}></Image>
                                <Text style={styles.dishName}>{elem.name}</Text>
                                <Text style={styles.timeText}>{elem.time}</Text>
                            </View>
                     </TouchableOpacity>

                        return dishField;
                    })
                }
                {
                    this.state.openedField
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    closeImage: {
        width: 30,
        height: 30
    },
    bigImageContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5
    },
    contentContainer: {
        flex: 7
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
        width: Dimensions.get('window').width - 10,//365,
        height: Dimensions.get('window').height - 260,
        marginTop: 30,
        marginLeft: 5,
        backgroundColor: '#f58309',
        borderRadius: 10,
        opacity: 0.9
    },
    dishesContainer: {
        flex: 1,
        padding: 5
    },
    field: {
        height: 70,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f7f8f9',
        borderRadius: 10,
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5
    },
    imageIcon: {
        width: 65,
        height: 65,
        borderRadius: 10
    },
    dishName: {
        fontWeight: 'bold'
    },
    timeText: {
        color: 'grey',
        fontSize: 12
    }
})