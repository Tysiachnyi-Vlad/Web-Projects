import React from 'react'; 

export default function Row({id, name, from, to}){
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{from}</td>
            <td>{to}</td>
        </tr>
    );
}