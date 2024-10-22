import axios from "axios";
import { jwtDecode } from "jwt-decode";

const loginAuth = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      //   console.log(res);
      callback(true, res);
    })
    .catch((err) => {
      callback(false, err);
    });
};

const getUsername = (token, callback) => {
  const decoded = jwtDecode(token);

return decoded.user;
//   console.log(decoded.user);
};

export default { loginAuth , getUsername};
