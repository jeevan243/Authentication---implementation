import axios from "axios";
import { useState } from "react";

export const Signup = () => {
  const userObj = {
    name: "",
    email: "",
    mobile: "",
    password: "",
  };
  const [userData, setUserData] = useState(userObj);

  const getData = () => {
    axios
      .post("http://localhost/register")
      .then((res) => {
        alert("User Registered successfully");
      })
      .catch((er) => {
        alert("Something Went wrong Please try again");
      });
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" id="name" onChange={handleChange} />
          <label>Email</label>
          <input type="email" id="email" onChange={handleChange} />
          <label>Mobile</label>
          <input type="number" id="mobile" onChange={handleChange} />
          <label>Password</label>
          <input type="Password" id="password" onChange={handleChange} />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};
