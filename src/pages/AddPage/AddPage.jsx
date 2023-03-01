import AddForm from "../../components/AddForm/AddForm";
import { addData } from "../../scripts/api";

function AddPage() {

  function addItemHandler(item) {
    addData(item);
  }
  
  return (
    <div>
      <AddForm addItem={addItemHandler} />
    </div>
  );
}

export default AddPage;
