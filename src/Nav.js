/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Nav = () => {
    return (
        <div className="nav-wrapper flex mt-2">
            <div className="navbar flex px-2 py-4 items-center bg-white rounded-full "> {/*absolute left-2/4 -translate-x-2/4 top-2 */}
                <div className="nav-brand mfasdr-2 pfasy-2">
                    <a href="#" className="nav-item px-3 py-2">SMART TEST</a>   
                    </div>
                <div className="nav-items-wrapper flex place-content-around">
                    <div className="nav-item">
                        <a href="#" className="nav-item px-3 py-2 hover:shadow-md">Home</a>
                    </div>
                    <div className="nav-item">
                        <a href="#" className="nav-item px-3 py-2">About us</a>
                    </div>
                    <div className="nav-item">
                        <a href="#" className="nav-item px-3 py-2">Settings</a>
                    </div>
                    <div className="nav-item">
                        <a href="#" className="nav-item px-3 py-2">More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;