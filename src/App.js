import { useState } from "react";
import { sculptureList } from "./data.js";
import "./App.css";

function App() {
  const [index, setindex] = useState(0);
  const [showMore, setshowMore] = useState(true);

  function handleNextClick() {
    setindex(index === sculptureList.length - 1 ? index : index + 1);
  }
  function handlePrevClick() {
    setindex(index === 0 ? index : index - 1);
  }

  function handleMoreDetailsClick() {
    setshowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <div className="App">
      <div className="header">
        <img className="image" src={sculpture.url} alt={sculpture.alt} />
        <div className="info">
          <h2 className="name">{sculpture.name}</h2>
          <h6 className="artistName">Artist: {sculpture.artist}</h6>
          <button className="button" onClick={handleMoreDetailsClick}>
            {showMore ? "hide" : "show"} details
          </button>
          {showMore && <p>{sculpture.description}</p>}
        </div>
      </div>
      <div className="bottom">
        <h5>
          ( {index + 1} of {sculptureList.length} )
        </h5>
      </div>
      <div className="bottom-button">
        <button className="button" onClick={handlePrevClick}>
          Prev
        </button>
        <button className="button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
