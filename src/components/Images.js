import React from 'react';
import '../App.css';
import Data from '../data.json';


const Images = ({ images, loading }) => {
if(loading) {
    return <h2>Loading...</h2>;
}
    console.log(images);
    return (
        <div className="wrapper">
            {Data.map((image, index) => (
                <div key={index} className="images">
                <img src={image.sample_url} alt="Image" className="image" />
                <p>Выберите лицензию</p>
                </div>
            ))}
    </div>
    )
};

export default Images;