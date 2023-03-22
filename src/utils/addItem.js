import axios from "axios";

async function addItem(title, body, userId) {
  try {
    const postData = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
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

    alert(`Item added successfully - status:${postData.status}`);
    return postData;
  } catch (err) {
    alert(`Error - ${err}`);
    return err;
  }
}

export default addItem;
