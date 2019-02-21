import React from 'react';

export default props => {
    console.log(props);

    const { src, style} = props.about;

    return (
        <img onMouseOver={hoverContent} className='scrapbook-image' style={style} src={src} alt=""/>
    )
}

function hoverContent () {
    console.log('test');
    console.log('This: '+ this);
}