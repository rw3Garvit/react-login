import axios from "axios";
import React, { useRef } from "react";
import Cookies from "js-cookie";

const Login = () => {
  const cardNo = useRef();
  const password = useRef();

  const handleLogin = () => {
    const data = {
      cardNo: cardNo.current.value,
      password: password.current.value,
    };

    console.log(data);

    axios.post("http://13.235.248.55:8000/v1/login/user", data).then((res) => {
      if (res.status === 200) {
        const _id = res.data.data._id;
        const role = res.data.data.role;
        const name = res.data.data.name;
        console.log(role);
        Cookies.set("role", role);
        Cookies.set("name", name);
        Cookies.set("_id", _id);
        window.location = "/";
      }
    });

    // axios
    //   .post("http://13.235.248.55:8000/v1/login/user", data)
    //   .then((res) => {
    //     console.log(res);
    //     if (res.status === 200) {
    //       Cookies.set("role", res.data.data.role);
    //       window.location = "/";
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };
  return (
    <div>
      <input type="text" name="cardNo" ref={cardNo} />
      <input type="text" name="password" ref={password} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
