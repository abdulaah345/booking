import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarAlt, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import{format}from'date-fns';
const Header = ({type}) => {
  const[Opendate,setOpenDate]=useState(false);
  const[Openoptions,setOpenoptions]=useState(false);
  const[options,setOptions]=useState({
    adult:1,
    childern:0,
    room:1
  });

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const handeloptions=(name,operations)=>{
  setOptions(prev=>{
    return {
      ...prev,[name]:operations==="i" ? prev[name] +1 
      :prev[name]-1 
    }
  })
  }

  return (
    <div className='header'>
      <div className={type==="list"?"headercontainer.listmode":"headercontainer"}>
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
      { type!=="list" &&
          <>
   
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
     
      <span onClick={()=>setOpenDate(!Opendate)} className='headersearchtext' >{`${format(date[0].startDate,"MM/dd/yyy"  )} to ${format(date[0].endDate,"MM/dd/yyy"  )}`}</span>
           {Opendate && <DateRange
        editableDateInputs={true}
        onChange={item => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
        className='headerdate'
      />}
      </div>
      <div className="headerserachitem">
      <FontAwesomeIcon icon={faPerson} className='headericon' />
      <span onClick={()=>setOpenoptions(!Openoptions)} className='headersearchtext'>{`${options.adult} adult . ${options.childern} childern . ${options.room} room`}</span>
    { Openoptions&& <div className="options">
        <div className="optionitem">
              <span className="optiontext">Adult</span>
              <div className="optioncountiners">
              <button className='optionscountiner' onClick={()=>handeloptions("adult","i")}>+</button>
              <span className='optionscountinernumber'>{`${options.adult}`}</span>
              
              <button disabled={options.adult<=1} className='optionscountiner' onClick={()=>handeloptions("adult","d")}>-</button>
              </div>
        </div>
        <div className="optionitem">
              <span className="optiontext">Childern</span>
              <div className="optioncountiners">
              <button className='optionscountiner' onClick={()=>handeloptions("childern","i")}>+</button>
              <span className='optionscountinernumber'>{`${options.childern}`}</span>
              <button className='optionscountiner' disabled={options.childern<=0} onClick={()=>handeloptions("childern","d")}>-</button>
             
        </div>
        </div>
        <div className="optionitem">
              <span className="optiontext">Room</span>
              <div className="optioncountiners">
              <button className='optionscountiner' onClick={()=>handeloptions("room","i")}>+</button>
              <span className='optionscountinernumber'>{`${options.room}`}</span>
              <button className='optionscountiner' disabled={options.room<=1} onClick={()=>handeloptions("room","d")}>-</button>
              </div>
    
        </div>
      </div>}
      </div>
      <div className="headerserachitem">
       <button className="headerbutton">Search</button>

      </div>
      
     
      </div>
      </>}
      </div>
    
    </div>
  );
}

export default Header;
