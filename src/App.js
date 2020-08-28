import React,  { useState, useEffect  } from 'react';
import './App.css';
import Data from './data.json';
import Checkbox from '@material-ui/core/Checkbox';
import Footer from './components/Footer/Footer.js';
import DeleteIcon from '@material-ui/icons/Delete';
import GetAppIcon from '@material-ui/icons/GetApp';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ShareIcon from '@material-ui/icons/Share';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Pagination from '@material-ui/lab/Pagination';


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
      activePage: '',
      selectAllChecked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.selectedImages = this.selectedImages.bind(this);
    this.deleteSelectedImages = this.deleteSelectedImages.bind(this);
    this.selectAllImages = this.selectAllImages.bind(this);
  }

  

      handleClick(e, index) {
        this.setState({
          currentPage: Number(index),
          activePage: index
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
        images: nextImagesState,
        });
      }

     selectAllImages(){
        let selectAllChecked = !this.state.selectAllChecked;
          this.setState({
              selectAllChecked: selectAllChecked
          });

          let images = this.state.images.slice();
          if(selectAllChecked){
              for(var i = 0; i < this.state.images.length; i++)
                  images[i].isSelected = true;
          }
          else {
              for(var i = 0; i < this.state.images.length; i++)
                  images[i].isSelected = false;

          }
          this.setState({
              images: images
          });
     }


      deleteImage(indexSelected) {
       const newImages = this.state.images.filter((image, index) => indexSelected !== index)
        this.setState({
          ...this.state,
          images: newImages
       });
      }
      
      deleteSelectedImages() {
        const newImages = this.state.images.filter(image => image.isSelected === false)
        this.setState ({
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

      const { isSelected } = this.state.images;
      let classNames = 'checkbox';
      let  visibility = 'visibility';
      if (image.isSelected === true) {
      classNames += ' active';
      visibility += ' active';
    }

      return (
        <div key={index} className="images">
            <div className="icons">
                <div className={classNames}>
                  <Checkbox 
                        checked={image.isSelected}
                        onChange={e => {
                          this.selectedImages(indexOfFirstImage + index);}
                        } 
                  />
                </div>
                <div className="icons__left">
                  <div className="share"><ShareIcon /></div>
                  <div className="trash"><DeleteIcon onClick={e => {this.deleteImage(indexOfFirstImage + index);}} /></div>
                  <div className="download"><GetAppIcon /></div>
                </div>
            </div> 
            <div className={visibility}><VisibilityIcon fontSize="large" /></div>         
            <img src={image.sample_url} alt="Image" className="image" />
            <div className="title">
              <div className="title__info">
                <span className="question-box">?</span>
                <span className="triangle">&#9660;</span>
                <span className="text">Выберите лицензию</span>
              </div>
              <div><CreditCardIcon className="creditcard"/></div>
            </div>
        </div>
      )
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(images.length / imagesPerPage); i++)
       pageNumbers.push(i)

    const renderPageNumbers = pageNumbers.map((number, index) => {
      const active = this.state.activePage;
      let classPag = 'pagination';
      if (active === number) {
        classPag += ' activepag';
      }
      
      return (
        <div className={classPag}
          key={number}
          id={number}
          onClick={(e) => this.handleClick(e, number)}
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
          <Footer images={images} 
          selectAllImages={this.selectAllImages}
          deleteSelectedImages={this.deleteSelectedImages}
         />
      </div>
    );
  }
}
export default App;
