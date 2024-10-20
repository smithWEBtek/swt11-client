import { Link } from 'react-router-dom';
// import '../../styles.css'

const NavBar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar-link'>about</Link>
      <Link to='/' className='navbar-link'>blog</Link>
      <Link to='/' className='navbar-link'>samples</Link>
      <Link to='/' className='navbar-link'>library</Link>
    </div>)
}

export default NavBar;