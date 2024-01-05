import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const fname = useRef();
  const lname = useRef();

  const [result, setresult] = useState([]);
  const [view, setview] = useState({});
  const [index, setindex] = useState();

  const arr = JSON.parse(localStorage.getItem("detail")) || [];

  //data submit
  const handleSubmit = () => {
    const data = {
      fname: fname.current.value,
      lname: lname.current.value,
    };

    console.log(data);

    arr.push(data);

    localStorage.setItem("detail", JSON.stringify(arr));
    setresult(arr);
  };

  //data delete
  const handleDelete = (index) => {
    console.log(index);

    arr.splice(index, 1);

    localStorage.setItem("detail", JSON.stringify(arr));
    setresult(arr);

    console.log(arr);
  };

  //set model
  const handleView = (val, ind) => {
    // console.log(ind, val)
    setview(val);
    setindex(ind);
  };

  //onchange
  const handle = (e) => {
    setview({ ...view, [e.target.name]: e.target.value });
  };

  //final update
  const handleUpdate = () => {
    console.log(view);
    console.log(index);

    arr.splice(index, 1, view);

    localStorage.setItem("detail", JSON.stringify(arr));

    setresult(arr);
  };

  //data load
  useEffect(() => {
    setresult([...arr]);
  }, []);

  // console.log(view, "view");

  return (
    <>
      <div>
        <input type="text" name="fname" ref={fname} />
        <input type="text" name="lname" ref={lname} />
        <button onClick={handleSubmit}>add</button>
      </div>

      <div>
        <input type="text" name="fname" value={view.fname} onChange={handle} />
        <input type="text" name="lname" value={view.lname} onChange={handle} />
        <button onClick={handleUpdate}>update</button>
      </div>
      {result?.map((val, ind) => {
        return (
          <>
            <h1>{val.fname}</h1>
            <p>{val.lname}</p>
            <button onClick={() => handleDelete(ind)}>remove</button>
            <button onClick={() => handleView(val, ind)}>view</button>
          </>
        );
      })}

      <button>Logout</button>
    </>
  );
};

export default Home;
