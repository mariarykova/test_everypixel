import React,  { useState, useEffect  } from 'react';
import './App.css';
import Pagination from './components/Pagination';
import Data from './data.json';
import Checkbox from '@material-ui/core/Checkbox';
import Footer from './components/Footer/Footer.js';
import DeleteIcon from '@material-ui/icons/Delete';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: Data.map(item => {
        return {
          ...item,
          isSelected: false
        };
      }),
      currentPage: 1,
      imagesPerPage: 6,
      activePage: 1,
    };
    this.handleClick = this.handleClick.bind(this);
    this.selectedImages = this.selectedImages.bind(this);    
  }

  

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }


  selectedImages(indexSelected) {
    const nextImagesState = this.state.images.map((image, index) => {
      let nextSelectedState = image.isSelected;
      if (index === indexSelected) {
       nextSelectedState = !image.isSelected;
     }
      return {
        ...image,
        isSelected: nextSelectedState
      };
    });
    
    this.setState({
      ...this.state,
     images: nextImagesState
    });
  }


  deletedImages(indexSelected) {
    const newImages = this.state.images.filter((image, index) => indexSelected !== index)
    this.setState({
      ...this.state,
      images: newImages
    });
}

  
   render() {
    const { images, currentPage, imagesPerPage } = this.state;

  // Logic for displaying images

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  
    const renderImages = currentImages.map((image, index) => {
      return (
          <div key={index} className="images">
          <div className="icons">
            <div className="checkbox"> 
          <Checkbox checked={image.isSelected}
                    onChange={e => {this.selectedImages(indexOfFirstImage + index);}} />
          </div>
          <div className="trash">
            <DeleteIcon onClick={e => {this.deletedImages(indexOfFirstImage + index);}} />
          </div>
          </div>
          
          
          <img src={image.sample_url} alt="Image" className="image" />
          <div className="title">
          <span className="question-box">?</span>
          <span className="triangle">&#9660;</span>
          <span className="text">Выберите лицензию</span>
          </div>
        </div>
      )
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(images.length / imagesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <div className="pagination"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </div>
      );
    });


        return (
      <div className="App">
        <div className="header">{this.state.images.length} ИЗОБРАЖЕНИЙ</div>
        <div className="wrapper">
        {renderImages}
        </div>
        <div className="pages">
        {renderPageNumbers}
        </div>
        <Footer images={images} />
      </div>
    );
  }
}
export default App;
