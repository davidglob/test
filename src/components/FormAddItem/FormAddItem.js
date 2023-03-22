import React, { useReducer } from "react";
import { Button, TextField } from "@mui/material";
import addItem from "../../utils/addItem";

const FormAddItem = () => {
  const initialState = {
    title: "",
    body: "",
    userId: "",
  };
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(formInput.title, formInput.body, formInput.userId);
    console.log("8888", formInput);
    setFormInput(initialState);
    console.log("9999", formInput);
  };

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="title"
        name="title"
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        required={true}
        onChange={handleInput}
        value={formInput.title}
      />
      <TextField
        id="body"
        name="body"
        label="Body"
        variant="outlined"
        fullWidth
        margin="normal"
        required={true}
        onChange={handleInput}
        value={formInput.body}
      />
      <TextField
        id="userId"
        name="userId"
        label="User ID"
        variant="outlined"
        type="number"
        fullWidth
        margin="normal"
        required={true}
        onChange={handleInput}
        value={formInput.userId}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Item
      </Button>
    </form>
  );
};

export default FormAddItem;
