import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarAlt, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import{format}from'date-fns';
const Header = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  

  return (
    <div className='header'>
      <div className="headercontainer">
      <div className="headerlist">
        <div className="headerlistitem active">
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
        </div>
        <div className="headerlistitem">
        <FontAwesomeIcon icon={faPlane} />
        <span>Flights</span>
        </div>
        <div className="headerlistitem">
        <FontAwesomeIcon icon={faCar} />
        <span>Car Rental</span>
        </div>
        <div className="headerlistitem">
        <FontAwesomeIcon icon={faBed} />
        <span>Attractions</span>
        </div>
        <div className="headerlistitem">
        <FontAwesomeIcon icon={faTaxi} />
        <span>Aairport taxis</span>
        </div>
      </div>
      <h1 className="headerTitle">A lifeTime of Discounts?It 's Genius</h1>
      <p className="headerdesc"> Get rewarded for your travels – unlock instant savings of 10% or
      more with a free Lamabooking account</p>
      <button className='headerbutton'> Sign in / Resgister</button>
      <div className="headersearch">
      <div className="headerserachitem">
      <FontAwesomeIcon icon={faBed} className='headericon' />
      <input type="text" placeholder='Where are you Going?' className='headersearchinput' />
      </div>
      <div className="headerserachitem">
      <FontAwesomeIcon icon={faCalendarDays} className='headericon' />
     
      <span className='headersearchtext'>{`${format(date[0].startDate,"MM/dd/yyy")}`}</span>
          <DateRange
      editableDateInputs={true}
      onChange={item => setDate([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={date}
      className='headerdate'
    />
      </div>
      <div className="headerserachitem">
      <FontAwesomeIcon icon={faPerson} className='headericon' />
      <span className='headersearchtext'>2 adults 2 childern 1 room</span>
      </div>
      <div className="headerserachitem">
       <button className="headerbutton">Search</button>

      </div>
      </div>
      
      </div>
    
    </div>
  );
}

export default Header;
