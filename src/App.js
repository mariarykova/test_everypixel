import React, { useState, useEffect } from 'react';
import Images from './components/Images';
import './App.css';
import Data from './data.json';
import Pagination from "react-js-pagination";

const App = () => {
  const [images, setImages] = useState([Data]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage, setImagesPerPage] = useState(6);

  console.log(images);

  return (
    <div className="App">
      <div className="footer">12 изображений</div>
      <Images images={images} loading={loading} />
    </div>
  );
};

export default App;
