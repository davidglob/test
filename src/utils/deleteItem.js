import axios from "axios";

async function deleteItem(id) {
  try {
    const postData = await axios.delete(
      "https://jsonplaceholder.typicode.com/todos/" + id,
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    alert(`Item edited successfully - status:${postData.status}`);
    return postData;
  } catch (err) {
    alert(`Error - ${err}`);
    return err;
  }
}

export default deleteItem;
