import React from 'react';

import Filter from './Filter';
import Image from './Image';

function FilterList({ image, settings, selectedFilter, updateSettings }) {
    return (
        <section className="filter-list">
            <Filter
                name="noir"
                settings={{ contrast: 138, hue: 0, brightness: 122, saturate: 0, sepia: 0 }}
                selected={selectedFilter === 'noir'}
                onClick={updateSettings}>
                <Image src={image} />
            </Filter>

            <Filter
                name="aged"
                settings={{ contrast: 94, hue: -54, brightness: 92, saturate: 100, sepia: 44 }}
                selected={selectedFilter === 'aged'}
                onClick={updateSettings}>
                <Image src={image} />
            </Filter>

            <Filter
                name="whiteout"
                settings={{ contrast: 32, hue: 0, brightness: 173, saturate: 0, sepia: 0 }}
                selected={selectedFilter === 'whiteout'}
                onClick={updateSettings}>
                <Image src={image} />
            </Filter>

            <Filter
                name="vintage"
                settings={{ contrast: 164, hue: 0, brightness: 47, saturate: 0, sepia: 100 }}
                selected={selectedFilter === 'vintage'}
                onClick={updateSettings}>
                <Image src={image} />
            </Filter>
        </section>
    );
}

export default FilterList;