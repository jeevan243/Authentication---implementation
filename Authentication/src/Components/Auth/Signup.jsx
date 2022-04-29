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

  const handleChange = (e) => {
    const { value, id } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    // axios
    //   .post("http://localhost/register")
    //   .then((res) => {
    //     alert("User Registered successfully");
    //   })
    //   .catch((er) => {
    //     alert("Something Went wrong Please try again");
    //   });

    setUserData(userObj);
  };

  return (
    <>
      <div id="signupForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            onChange={handleChange}
            value={userData.name}
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            value={userData.email}
          />
          <input
            type="number"
            id="mobile"
            placeholder="Mobile"
            onChange={handleChange}
            value={userData.mobile}
          />
          <input
            type="Password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            value={userData.password}
          />
          <input type="submit" id="signUpsubmit" />
        </form>
      </div>
    </>
  );
};
