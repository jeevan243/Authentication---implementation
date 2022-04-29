import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const navigate = useNavigate();
  const userObj = {
    email: "",
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
    axios
      .post("http://localhost/login")
      .then((res) => {
        alert("User Registered successfully");
      })
      .catch((er) => {
        alert("Something Went wrong Please try again");
      });

    setUserData(userObj);
  };

  return (
    <>
      <div id="signupForm">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            placeholder="Email or Phone"
            onChange={handleChange}
            value={userData.email}
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
        <br />
        <button id="forgotButton" onClick={() => navigate("/forgot")}>
          Forgot Password
        </button>
      </div>
    </>
  );
};
