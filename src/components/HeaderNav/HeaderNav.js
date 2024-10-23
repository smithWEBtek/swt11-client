import { Link } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <div className='headernav'>
      <Link to='/about' className='headernav-link'>about</Link>
      <Link to='/projects' className='headernav-link'>projects</Link>
      <Link to='/prototypes' className='headernav-link'>prototypes</Link>
      <Link to='/blog' className='headernav-link'>blog</Link>
      <Link to='/library' className='headernav-link'>library</Link>
      <Link to='/tekmarks' className='headernav-link'>tekmarks</Link>
    </div>)
}

export default HeaderNav;