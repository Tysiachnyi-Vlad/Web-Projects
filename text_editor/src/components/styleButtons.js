import React from 'react';
import Button from './button';

export default function StyleButtons(){
    return(
        <div className="styleButtons">
            <Button value='Bold'/>
            <Button value='Italic'/>
            <Button value='Underline'/>
        </div>
    )
}