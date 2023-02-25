import { useState, useEffect, useCallback } from "react";
import { getData } from "../../scripts/api.js";
import ItemList from "../../components/Item/ItemList";

function ListPage() {

  const [items, setItems] = useState([]);

  const fetchItemsHandler = useCallback(async () => {
    const data = await getData();
    setItems(data);
  }, []);

  useEffect(() => {
    fetchItemsHandler();
    console.log(items);
  }, [fetchItemsHandler]);

  return (
    <>
    <button onClick={fetchItemsHandler}>Get Items</button>
    <div className="item-list-page">
      <ItemList items={items} />
    </div>
    </>
  );
}

export default ListPage;
