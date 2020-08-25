import React from 'react';
import '../App.css';

const Images = ({ images, loading }) => {
if(loading) {
    return <h2>Loading...</h2>;
}

console.log(images);

    return 
        <div className="wrapper">
            {images.map(image => (
                <div key={image.index} className="images">
                <img src={image.sample_url} alt="Image" className="image" />
                <p>Выберите лицензию</p>
                </div>
            ))}
        </div>
};

export default Images;