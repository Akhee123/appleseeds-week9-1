import Item from "./Item";
import './ItemList.module.css';

function ItemList(props) {
  return (
    <div className="item-list">
      {props.items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          image={item.avatar}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default ItemList;
