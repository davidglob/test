import axios from "axios";

async function editItem(id, title, body, userId) {
  try {
    const postData = await axios.put(
      "https://jsonplaceholder.typicode.com/todos/" + id,
      {
        id: parseInt(id),
        title: title,
        body: body,
        userId: parseInt(userId),
      },
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

export default editItem;
