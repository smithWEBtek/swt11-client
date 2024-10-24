import HeaderNav from '../HeaderNav'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img src="/images/misc/brad.png" alt="bradsmith" className="header-headshot" />
      </Link>
      <div>
        <Link to='/' className='header-title-subtitle-container'>
          <div className='header-title'>Brad Smith</div>
          <div className='header-subtitle'>fullstack software engineer</div>
        </Link>
      </div>
      <HeaderNav />
    </div>
  )
}

export default Header;