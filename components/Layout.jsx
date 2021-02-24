import React from 'react';
import Header from './Navbar'
import Footer from './Footer'

/**
* @author traj3ctory
* @function Layout
**/

const Layout = ({ children }) => {
    return (
        <>
            <div className="wrapper">
                <Header />
                {children}
                <Footer />
            </div>
        </>
    )
}


export default Layout