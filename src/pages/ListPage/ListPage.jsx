import { useState, useEffect, useCallback, createContext } from "react";
import { getData } from "../../scripts/api.js";
import ItemList from "../../components/Item/ItemList";

export const ListContext = createContext();

function ListPage() {
  const [items, setItems] = useState([]);

  const fetchItemsHandler = useCallback(async () => {
    const data = await getData();
    setItems(data);
  }, []);

  useEffect(() => {
    fetchItemsHandler();
  }, [fetchItemsHandler]);

  return (
    <>
      <button onClick={fetchItemsHandler}>Get Items</button>
      <div className="item-list-page">
        <ListContext.Provider value={{items, setItems}}>
          <ItemList items={items} />
        </ListContext.Provider>
      </div>
    </>
  );
}

export default ListPage;
