import { ListContext } from "../../pages/ListPage/ListPage";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { deleteData, getData } from "../../scripts/api";
import "./Item.css";

function Item(props) {
  const context = useContext(ListContext);

  async function deleteHandler() {
    await deleteData(props.id);
    const data = await getData();
    if (data.ok) {
      context.setItems([data]);
    }
  }

  return (
    <div className="item">
      <img src={props.image} />
      <div className="item-details">
        <h1>{props.price}</h1>
        <p>{props.description}</p>
        <div className="item-options">
          <Link to={`/listPage/update/${props.id}`}>Update</Link>
          <a onClick={deleteHandler}>Delete Item</a>
        </div>
      </div>
    </div>
  );
}

export default Item;
