import { useEffect } from "react";
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";
import Trusted from "../Trusted/Trusted";
import ItemListContainer from "../ItemList/ItemListContainer";

const Home = () => {
  useEffect(() => {
    document.title = "DevBoost";
  }, []);
  return (
    <>
      <main className="main">
        <section className="homeContainer">
          <div className="titleContainer">
            <h3 className="titles">
              Learn
              <span className="highlightText titles"> Web Development</span> at
              the minimum price.
            </h3>
            <h4 className="subtitles">
              From the comfort of your home, cancel whenever you want.
            </h4>
            <div className="homeButtons">
              <Link to="/log-in" className="noStyleAnchor" draggable="false">
                <button className="btn secondary">Subscribe!</button>
              </Link>
              <Link to="/faqs" className="noStyleAnchor" draggable="false">
                <button className="btn">More information</button>
              </Link>
            </div>
          </div>
          <div className="homeImage">
            <img
              src="https://res.cloudinary.com/diruiumfk/image/upload/v1680216082/web-development_tat3uu.png"
              alt="home decoration"
            />
          </div>
        </section>
      </main>
      <div className="homeProductsList">
        <ItemListContainer />
      </div>
      <Trusted />
      <Counter />
    </>
  );
};

export default Home;
