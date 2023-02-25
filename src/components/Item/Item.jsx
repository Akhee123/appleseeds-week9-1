import './Item.module.css';

function Item(props) {
  return (
    <div className='item'>
      <img src={props.image} />
      <div>
        <h1>{props.price}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Item;
