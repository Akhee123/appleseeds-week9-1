import UpdateItem from "../../components/UpdateItem/UpdateItem";
import { useParams } from "react-router-dom";
import { getIndexData, updateData } from "../../scripts/api";

function UpdatePage() {

  const params = useParams();

  function updateItemHandler(data) {
    updateData(params.itemId, data);
  }

  return (
    <div>
      <UpdateItem updateItem={updateItemHandler} />
    </div>
  );
}

export default UpdatePage;
