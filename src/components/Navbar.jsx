import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo"> React Chat</span>

            <div className="user">
                <img src="https://images.pexels.com/photos/1905975/pexels-photo-1905975.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                <span>Finn</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar;