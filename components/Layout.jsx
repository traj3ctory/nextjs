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
                <div className="container">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}


export default Layout