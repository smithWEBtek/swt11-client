import HeaderNav from '../HeaderNav'
import Brad from './brad.png';
import SocialIcons from '../SocialIcons/SocialIcons'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>

      <Link to='/'>
        <img src={Brad} alt="Brad Smith pic" className="header-headshot" />
      </Link>
      <div>
        <Link to='/'>
          <div className='header-title'>Brad Smith</div>
        </Link>
        <div className='header-subtitle'>fullstack software engineer</div>
        <SocialIcons />
        <HeaderNav className='header-nav' />
      </div>
    </div>
  )
}

export default Header;