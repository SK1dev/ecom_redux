import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg'
import './navigation.styles.scss'
const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='\'>
                    <div><img src={logo} width='150px' alt='Logo' /></div>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop' >
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

export default Navigation