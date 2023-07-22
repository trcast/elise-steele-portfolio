import "./App.css";
import ArticleData from "./components/ArticleData";
import ArticleCard from "./components/ArticleCard";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import { useRef } from "react";

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

  const header = useRef();
  const work = useRef();
  const about = useRef();
  const contact = useRef();

  function scrollToSection(elementRef) {
    elementRef.current?.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  }
  return (
    <div>
      <nav className="sticky top-0">
        <div className=" bg-[#fffdf8] max-w-screen flex flex-wrap items-center justify-between mx-auto border-b border-gray-900 px-10 py-4 md:px-24">
          <img
            src="./assets/es-logo.png"
            alt="ES Typeface Logo"
            className="w-8 cursor-pointer"
            onClick={() => scrollToSection(header)}
          />
          <div>
            <ul className="flex flex-row justify-center items-center text-lg font-fields text-gray-900">
              <li
                className="pr-4 cursor-pointer hover:text-gray-500 transition-all"
                onClick={() => scrollToSection(work)}
              >
                WORK
              </li>
              <li
                className="pr-4 cursor-pointer hover:text-gray-500 transition-all"
                onClick={() => scrollToSection(about)}
              >
                ABOUT
              </li>
              <li
                className="cursor-pointer hover:text-gray-500 transition-all"
                onClick={() => scrollToSection(contact)}
              >
                CONTACT
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div ref={header}>
        <Header />
      </div>
      <div ref={work}>{articleCardElements}</div>
      <div ref={about}>
        <About />
      </div>
      <div ref={contact}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
