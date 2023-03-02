import { Link } from "react-router-dom";
import { deleteData } from "../../scripts/api";
import './Item.module.css';

function Item(props) {

  function deleteHandler() {
    deleteData(props.id);
  }

  return (
    <div className='item'>
      <img src={props.image} />
      <div>
        <h1>{props.price}</h1>
        <p>{props.description}</p>
        <div>
          <Link to={`/listPage/update/${props.id}`}>Update</Link>
          <a onClick={deleteHandler}>Delete Item</a>
        </div>
      </div>
    </div>
  );
}

export default Item;
