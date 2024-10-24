import { Link } from 'react-router-dom';

const HeaderNav = () => {
  return (
    <div className='headernav'>
      <Link to='/about' className='headernav-link'>about</Link>
      <Link to='/projects' className='headernav-link'>projects</Link>
      <Link to='/prototypes' className='headernav-link'>prototypes</Link>
      <Link to='/blog' className='headernav-link'>blog</Link>
      <Link to='/bookmarks' className='headernav-link'>bookmarks</Link>
    </div>)
}

export default HeaderNav;