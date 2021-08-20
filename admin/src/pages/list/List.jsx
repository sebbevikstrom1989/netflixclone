import { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { updateList } from "../../contex/listContext/apiCalls";
import { ListContext } from "../../contex/listContext/ListContext";
import "./list.css";

export default function List() {
  const [edit, setEdit] = useState({});

  const location = useLocation();
  const list = location.list;
  const history = useHistory();

  const { dispatch } = useContext(ListContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setEdit({ ...edit, [e.target.name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateList(list._id, edit, dispatch);
    history.push("/lists");
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newlist">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{list.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">{list.type}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Movie Title</label>
            <input
              type="text"
              placeholder={list.title}
              name="title"
              onChange={handleChange}
            />
            <label>Type</label>
            <input
              type="text"
              placeholder={list.type}
              name="type"
              onChange={handleChange}
            />
            <label>Genre</label>
            <input
              type="text"
              placeholder={list.genre}
              name="genre"
              onChange={handleChange}
            />
          </div>
          <div className="productFormRight">
            <button className="productButton" onClick={handleSubmit}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
