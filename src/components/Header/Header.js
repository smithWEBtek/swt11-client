import HeaderNav from '../HeaderNav'
import Brad from './brad.png';
import SocialIcons from '../SocialIcons/SocialIcons'

const Header = () => {
  return (
    <div className='header'>
      <img src={Brad} alt="Brad Smith pic" className="header-headshot" />
      <div>
        <div className='header-title'>Brad Smith</div>
        <div className='header-subtitle'>fullstack software engineer</div>
        <SocialIcons />
        <HeaderNav className='header-nav' />
      </div>
    </div>
  )
}

export default Header;