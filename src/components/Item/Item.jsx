import { Link } from "react-router-dom";
import './Item.module.css';

function Item(props) {
  return (
    <div className='item'>
      <img src={props.image} />
      <div>
        <h1>{props.price}</h1>
        <p>{props.description}</p>
        <div>
          <Link to={`/listPage/update/${props.id}`}>Update</Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
