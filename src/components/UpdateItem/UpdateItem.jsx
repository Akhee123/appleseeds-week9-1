import { useRef } from "react";

function UpdateItem(props) {

    const nameRef = useRef('');
    const imageRef = useRef('');
    const priceRef = useRef('');
    const descriptionRef = useRef('');

    function submitHandler(event) {
        event.preventDefault();

        const item = {
            name : nameRef.current.value,
            avatar : imageRef.current.value,
            price : priceRef.current.value,
            description : descriptionRef.current.value
        };

        props.updateItem(item);
    }

    return (
      <div>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text"  id="name" ref={nameRef}/>
            </div>
            <div>
                <label htmlFor="image">Image</label>
                <input type="text"  id="image" ref={imageRef}/>
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input type="text"  id="price" ref={priceRef}/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text"  id="description" ref={descriptionRef}/>
            </div>
            <button type="submit">Update</button>
        </form>
      </div>
    );
  }
  
  export default UpdateItem;
  