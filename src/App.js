import React from 'react';
import './App.css';
import Data from './data.json';

function App() {
  return (
    <div className="App">
        {Data.map((postDetail, index) => {
          return <div key={index} className="images">
          <img src={postDetail.sample_url} alt="Image" className="image" />
          </div>
        })}
        console.log(Data);
    </div>
  );
}

console.log(Data);

export default App;
