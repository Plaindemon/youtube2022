import React from "react";

const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src="https://images.pexels.com/photos/1905975/pexels-photo-1905975.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
                <span> just now</span>
            </div>
            <div className="messageContent">
                <p>Hello</p>
                <img src="https://images.pexels.com/photos/1905975/pexels-photo-1905975.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            </div>
        </div>
    )
}

export default Message;