import React from 'react';
import './App.css';
import Data from './data.json';
import Pagination from "react-js-pagination";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [Data],
      currentPage: 1,
      imagesPerPage: 6
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { images, currentPage, imagesPerPage } = this.state;

    // Logic for displaying images

    const indexOfLastImage = currentPage * imagesPerPage;
    const indexOfFirstImage = indexOfLastImage - imagesPerPage;
    const currentImages = Data.slice(indexOfFirstImage, indexOfLastImage);

    const renderImages = currentImages.map((image, index) => {
      return (
          <div key={index} className="images">
          <img src={image.sample_url} alt="Image" className="image" />
          <p>Выберите лицензию</p>
        </div>
      )
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(Data.length / imagesPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <div
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
        <div className="footer">12 изображений</div>
        <div className="wrapper">
        {renderImages}  
        </div>
        <div className="pages">
        {renderPageNumbers}
        </div>
      </div>
    );
  }
}
export default App;
