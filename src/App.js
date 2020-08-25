import React from 'react';
import './App.css';
import Data from './data.json';

function App() {
  return (
    <div className="App">
      <div className="footer">12 изображений</div>
      <div className="wrapper">
      {Data.map((postDetail, index) => {
          return <div key={index} className="images">
          <img src={postDetail.sample_url} alt="Image" className="image" />
          <p>Выберите лицензию</p>
          </div>
        })}
      </div>
    </div>
  );
}

console.log(Data);

export default App;
