import React, { useReducer } from "react";
import { Button, TextField } from "@mui/material";
import editItem from "../../utils/editItem";

const FormEditItem = () => {
  const initialState = {
    id: "",
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
    editItem(formInput.id, formInput.title, formInput.body, formInput.userId);
    setFormInput(initialState);
  };

  const handleInput = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="edit-id"
        name="id"
        label="ID"
        variant="outlined"
        type="number"
        fullWidth
        margin="normal"
        required={true}
        onChange={handleInput}
        value={formInput.id}
      />
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
        Edit Item
      </Button>
    </form>
  );
};

export default FormEditItem;
