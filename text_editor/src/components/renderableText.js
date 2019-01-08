import React, { Component } from 'react';

export default class RenderableText extends Component {

    render(){
        const {text, onChangeText, doubleClicked} = this.props;
        
        return (
            <div className="textAreaBlock">
                <textarea 
                className = "text" 
                ref='myTextarea'
                onChange = {e => onChangeText(e)}
                onDoubleClick = {e => doubleClicked(e, this.refs.myTextarea)}
                value = {text}
                />
            </div> 
        )
    }
    
}