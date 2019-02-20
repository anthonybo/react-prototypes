import React from 'react';
import './movie_style.css';

export default props => {
    const {info} = props;
    console.log(info.link[1].attributes.href);
    return (
        <div className='movie-container'>
            <img className='movie-image' src={info['im:image'][2].label} alt=""/>
            <h3 className='movie-title'>{info['im:name'].label}</h3>
            <p>{info['summary'].label}</p>
            <a href={info.id.label} target='_blank' className='btn btn-success'>More Info</a>
            <a href={info.link[1].attributes.href} target='_blank' className='btn btn-warning'>Preview</a>
            <video width={560} controls>
                <source src={info.link[1].attributes.href} type='video/mp4'/>
            </video>
            <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">View Preview
            </button>

        </div>
    )
}
