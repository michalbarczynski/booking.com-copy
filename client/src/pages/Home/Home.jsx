import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <h1 className="homeTitle">Browse by property type</h1>
        <h1 className="homeTitle">Homes guests love</h1>
      </div>
    </div>
  );
};

export default Home;