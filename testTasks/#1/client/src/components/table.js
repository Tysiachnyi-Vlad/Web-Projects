import React from 'react';
import Row from './row';

export default function Table({data, toggleCheck, isChecked, time}) {

    return(
        <div>
        <input type="checkbox" 
            checked={isChecked}
            onChange={toggleCheck} 
        />
        <label>Open only</label>
        <table>
            <tbody>
                <Row 
                    id="Id" 
                    name="Name" 
                    from="From"
                    to="To"
                />
                {
                    data &&
                    data.map((elem, i) => {
                        const {instrumentID, name, tradingHours} = elem;
                        return <Row 
                                    id={instrumentID} 
                                    name={name} 
                                    from={time(tradingHours[0].from)} 
                                    to={time(tradingHours[0].to)} 
                                    key={i} 
                                />
                    })
                }
            </tbody>
        </table>
        </div>
    )
}