import "./App.css";
import ArticleData from "./components/ArticleData";
import ArticleCard from "./components/ArticleCard";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const articleCardElements = ArticleData.map((article) => {
    return (
      <ArticleCard
        id={article.id}
        key={article.id}
        title={article.title}
        company={article.company}
        description={article.description}
        link={article.link}
        image={article.image}
      />
    );
  });
  return (
    <div>
      <NavBar />
      <Header />
      {articleCardElements}
      <About />
      <Footer />
    </div>
  );
}

export default App;
