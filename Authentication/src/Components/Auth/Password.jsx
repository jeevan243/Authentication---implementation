import axios from "axios";
import { useParams } from "react-router-dom";

export const ResetPassword = () => {
  const { data } = useParams();

  const [userData, setUserData] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setUserData(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // let x = userData;
    // let payload;

    // if (x.split("").includes("@")) {
    //   payload = { email: userData, password: value };
    // } else {
    //   payload = { phone: userData, password: value };
    // }
    axios
      .patch("http://localhost/forget", { email: data, password: userData })
      .then((res) => {
        alert("Password Changed Successfully");
      });
  };

  return (
    <>
      <div id="signupForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="setPassword"
            placeholder="Please enter your passowrd"
            onChange={handleChange}
            value={userData.password}
          />
          <input type="submit" id="passwordSet" />
        </form>
        <br />
      </div>
    </>
  );
};
