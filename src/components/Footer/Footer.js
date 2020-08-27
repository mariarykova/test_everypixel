import React from 'react';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import './Footer.css';

const Footer = ({ images, indexOfFirstImage, index }) => {
    let selected = 0;
    for(let i = 0; i < images.length; i++)
        if(images[i].isSelected == true)
            selected++;

    
    return (
      <div className="footer">
          <button><RemoveCircleOutlineIcon onClick={e => {this.selectedAllImages(indexOfFirstImage + index);}} /></button>
          <div>{selected} изображений</div>
      </div>
  );
}
  
  export default Footer;