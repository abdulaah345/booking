import Featured from '../../component/featured/Featured';
import Header from '../../component/header/Header';
import Navbar from '../../component/navbar/navbar';
import Properiteslist from '../../component/properiteslist/properiteslist';
import './home.css';

const Home = () => {
  return (
    <div>
   <Navbar/>
   <Header/>
   <div className="homecontainer">
    <Featured/>
    <h1 className="hometitle">
    Homes guests love
    </h1>
    <Properiteslist/>
   </div>
    </div>
  );
}

export default Home;
