// import HeaderNav from '../HeaderNav'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>

      <Link to='/'>
        <img src="https://res.cloudinary.com/smithwebtek/image/upload/v1627313096/swt/brad3.png" alt="bradsmith" className="header-headshot" />
      </Link>
      <div>
        <Link to='/' className='header-title-subtitle-container'>
          <div className='header-title'>Brad Smith</div>
          <div className='header-subtitle'>fullstack software engineer</div>
        </Link>
        {/* <HeaderNav className='header-nav' /> */}
      </div>
    </div>
  )
}

export default Header;