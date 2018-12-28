import React from 'react';

import Range from './Range';

function Settings({ settings, handleChange }) {
    const { contrast, hue, brightness, saturate, sepia } = settings;

    return (
        <aside className="settings">
            <Range
                name="contrast"
                value={contrast}
                min={0}
                max={200}
                onChange={handleChange} />

            <Range
                name="hue"
                value={hue}
                min={-360}
                max={360}
                onChange={handleChange} />

            <Range
                name="brightness"
                min={0}
                max={200}
                value={brightness}
                onChange={handleChange} />

            <Range
                name="saturate"
                min={0}
                max={100}
                value={saturate}
                onChange={handleChange} />

            <Range
                name="sepia"
                min={0}
                max={100}
                value={sepia}
                onChange={handleChange} /> 
        </aside>
    );
}

export default Settings;