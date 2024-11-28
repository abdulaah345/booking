import Featured from '../../component/featured/Featured';
import Featuredprop from '../../component/featuredproperties/Featuredprop';
import Header from '../../component/header/Header';
import Maillist from '../../component/maillist/Maillist';
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
    Browse by property type
        </h1>
    <Properiteslist/>
    <h1 className="hometitle">
    Homes guests love
    </h1>
    <Featuredprop/>
    <Maillist/>
   </div>
    </div>
  );
}

export default Home;
