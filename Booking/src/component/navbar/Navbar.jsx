import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navcontainer">
        <span className="logo">Booking</span>
        <div className="navitem">
            <button className='navbutton'>Register</button>
            <button className='navbutton'>login</button>

        </div>
        </div>
       
    </div>
  );
}

export default Navbar;
