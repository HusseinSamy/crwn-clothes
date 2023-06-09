import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import CustomLogoIcon from '../../components/custom-logo-icon/custom-logo-icon.component'
import './header.styles.scss'
const Header = () => { 
    return (
        <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to='/'>
            <CustomLogoIcon className='logo' color='#ff00a8'/>
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
            <Link className='nav-link' to='/sign-in'>
              SIGN IN
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
}

export default Header;