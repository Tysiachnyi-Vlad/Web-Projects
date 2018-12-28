import React from 'react';

function Image({ src }) {
    const style = { backgroundImage: `url(${src})` };

    return <div className="image" style={style}></div>;
}

export default Image;