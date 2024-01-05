import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";

const Home = () => {
  const fname = useRef();
  const lname = useRef();
  const age = useRef();

  const [result, setresult] = useState();
  const [view, setview] = useState({});

  const [index, setindex] = useState();

  const arr = JSON.parse(localStorage.getItem("data")) || [];

  const handleSave = () => {
    const data = {
      fname: fname.current.value,
      lname: lname.current.value,
      age: age.current.value,
    };

    console.log(data);
    arr.push(data);

    localStorage.setItem("data", JSON.stringify(arr));

    setresult(arr);
  };

  const handledelete = (index) => {
    console.log(index);

    arr.splice(index, 1);

    console.log(arr);

    localStorage.setItem("data", JSON.stringify(arr));

    setresult(arr);
  };

  const handleView = (val, ind) => {
    console.log(val);
    setview(val);
    setindex(ind);
  };

  const handle = (e) => {
    setview({ ...view, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    console.log(view, "update");
    console.log(index, "index");

    arr.splice(index, 1, view);

    console.log(arr);

    localStorage.setItem("data", JSON.stringify(arr));

    setresult(arr);

    // console.log(arr);
  };

  useEffect(() => {
    // setresult(arr);
    // console.log("hello");
    setresult([...arr]);
  }, []);

  const handleLogout = () => {
    Cookies.remove("role");
    Cookies.remove("name");
    Cookies.remove("_id");
    window.location = "/";
  };

  // console.log(result, "result");

  return (
    <div>
      <input
        type="text"
        name="fname"
        value={view.fname}
        onChange={(e) => handle(e)}
      />
      <input
        type="text"
        name="lname"
        value={view.lname}
        onChange={(e) => handle(e)}
      />
      <input
        type="number"
        name="age"
        value={view.age}
        onChange={(e) => handle(e)}
      />

      {/* <input type="hidden" value={index} name="" id="" /> */}
      <button onClick={handleUpdate}>update</button>

      <input type="text" name="fname" ref={fname} />
      <input type="text" name="lname" ref={lname} />
      <input type="number" name="age" ref={age} />
      <button onClick={handleSave}>Save</button>

      {result?.map((val, ind) => {
        return (
          <>
            <h1>{val.fname}</h1>
            <button onClick={() => handledelete(ind)}>delete</button>
            <button onClick={() => handleView(val, ind)}>view</button>
          </>
        );
      })}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
