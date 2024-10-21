import { Link } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <div className='headernav'>
      <Link to='/about' className='headernav-link'>about</Link>
      <Link to='/blog' className='headernav-link'>blog</Link>
      <Link to='/samples' className='headernav-link'>samples</Link>
      <Link to='/library' className='headernav-link'>library</Link>
    </div>)
}

export default HeaderNav;