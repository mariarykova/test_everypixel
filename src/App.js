import React from 'react';
import './App.css';
import Pagination from './components/Pagination';
import Data from './data.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [Data],
      currentPage: 1,
      imagesPerPage: 6,
      activePage: 1
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
    for (let i = 1; i <= Math.ceil(Data.length / imagesPerPage); i++) {
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
        <div className="header">12 изображений</div>
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
