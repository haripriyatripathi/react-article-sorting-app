import { useState } from "react";
import Articles from "./Articles";
import data from "./data";
import "./style.css";

function App() {
  const [articles, setArticles] = useState(data);

  const sortByUpvotes = () => {
    const sorted = [...articles].sort((a, b) => b.upvotes - a.upvotes);
    setArticles(sorted);
  };

  const sortByDate = () => {
    const sorted = [...articles].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setArticles(sorted);
  };

  return (
    <div className="app">
      <h1 className="title">article sorting</h1>

      <div className="btn-box">
        <button className="btn" onClick={sortByUpvotes}>most upvoted</button>
        <button className="btn" onClick={sortByDate}>most recent</button>
      </div>

      <Articles articles={articles} />
    </div>
  );
}

export default App;
