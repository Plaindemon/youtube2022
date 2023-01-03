import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='find a user'/>
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/1905975/pexels-photo-1905975.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
        <div className="userChatInfo">
          <span>Finn</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
