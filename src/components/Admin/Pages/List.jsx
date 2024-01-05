import axios from "axios";
import React, { useEffect, useState } from "react";

const List = () => {
  const [result, setresult] = useState([]);
  const [input, setinput] = useState({});

  //take input
  const handle = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  //data add
  const handleAdd = () => {
    console.log(input);

    axios.post("http://localhost:3001/posts", input).then((res) => {
      console.log(res.data);

      if (res.status === 200) {
        setresult([...result, res.data]);
      }
    });
  };

  const handleDelete = (val) => {
    console.log(val, "delet");
    axios.delete(`http://localhost:3001/posts/${val.id}`).then((res) => {
      setresult(result.filter((e) => e.id !== val.id));
    });
  };

  useEffect(() => {
    const controller = new AbortController();
    console.log("useEffectn start");

    //get data
    axios
      .get("http://localhost:3001/posts", {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);
        setresult(res.data);
      });

    return () => {
      console.log("useEffefct close");
      controller.abort();
    };
  }, []);

  return (
    <div>
      <input type="text" name="title" onChange={handle} />
      <input type="text" name="author" onChange={handle} />
      <button onClick={handleAdd}>Add</button>
      {result?.map((val, ind) => {
        return (
          <>
            <h1>{val.id}</h1>
            <h1>{val.title}</h1>
            <h1>{val.author}</h1>
            <button onClick={() => handleDelete(val)}>delete</button>
          </>
        );
      })}
    </div>
  );
};

export default List;
