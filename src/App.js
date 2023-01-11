import './App.css';
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Navigator from "./components/Navigator";
import Articles from "./components/Articles";
import ArticleCard from "./components/ArticleCard";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigator />
      <Routes>
      <Route path="/articles" element={<Articles/>} />
      <Route path="/article/:article_id" element={<ArticleCard/>} />
      </Routes>
    </div>
  )
}

export default App;
