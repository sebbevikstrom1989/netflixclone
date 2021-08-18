import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import "./home.scss";

function Home({ type }) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTNkYzgyZmRkYWQzMDgwOWI0ZmZkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyOTE4NTc3NiwiZXhwIjoxNjI5NjE3Nzc2fQ.og9DXwnN7WnOL2UBhFuHiX9WyfINJ1N9A6UYLZBsLfk",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} key={list._id} />
      ))}
    </div>
  );
}

export default Home;
