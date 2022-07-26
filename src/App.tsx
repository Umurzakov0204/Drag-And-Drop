import React, { useState } from "react";
import "./App.css";

const PHOTO_URL =
  "https://mobimg.b-cdn.net/v3/fetch/e4/e465200f883e33abdc8ec1dbab1926d9.jpeg";

  const PHOTO_URL1 =
  "https://avatanplus.com/files/resources/original/5e6d47fd941f6170dae136a7.jpg";

const App = () => {
  const [content, setContent] = useState<string>("Drop Something Here");

  const dragStartHandler = (
    event: React.DragEvent<HTMLDivElement>,
    data: string
  ) => {
    event.dataTransfer.setData("text", data);
  };

  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    setContent(data);
  };

  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <div
        className="box1"
        onDragStart={(event) => dragStartHandler(event, PHOTO_URL)}
        draggable={true}
      >
        <img src={PHOTO_URL} alt="Cute Dog" />
      </div>

      <div
        className="box1"
        onDragStart={(event) => dragStartHandler(event, PHOTO_URL1)}
        draggable={true}
      >
        <img src={PHOTO_URL1} alt="Cute Dog" />
      </div>

      <div
        className="box2"
        onDragStart={(event) => dragStartHandler(event, "Drag")}
        draggable={true}
      >
        <h2>Drag</h2>
      </div>

      <div className="box3" onDragOver={allowDrop} onDrop={dropHandler}>
        {content.endsWith(".jpeg") ? <img src={content} /> : <h2>{content}</h2>}
      </div>

      <div className="box3" onDragOver={allowDrop} onDrop={dropHandler}>
        {content.endsWith(".jpg") ? <img src={content} /> : <h2>{content}</h2>}
      </div>
    </div>
  );
};

export default App;