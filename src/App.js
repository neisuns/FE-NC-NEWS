import './App.css';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Navigator from "./components/Navigator";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Navigator />
      <Routes>
      <Route path="/" element={<Articles/>} />
      <Route path="/articles/:article_id" element={<SingleArticle/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
