import React from "react";
import Avatar from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">React Chat</span>
        <span className="title">Register</span>
        <form>
            <input type="text" placeholder="display name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <input style={{display: "none"}} type="file" id="file"/>
            {/* id and htmlFor are the same  */}
            <label htmlFor="file">
                <img src={Avatar} alt="" />
                <span>Add an avatar</span>
            </label>
            <button>Sign up</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
