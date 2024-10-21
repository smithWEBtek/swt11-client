import { Link } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <div className='headernav'>
      <Link to='/' className='headernav-link'>about</Link>
      <Link to='/' className='headernav-link'>blog</Link>
      <Link to='/' className='headernav-link'>samples</Link>
      <Link to='/' className='headernav-link'>library</Link>
    </div>)
}

export default HeaderNav;