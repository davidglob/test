import React, { useReducer } from "react";
import { Button, TextField } from "@mui/material";
import deleteItem from "../../utils/deleteItem";

const FormDeleteItem = () => {
  const initialState = {
    id: "",
  };
  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    deleteItem(formInput.id);
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
        id="delete-id"
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
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Delete Item
      </Button>
    </form>
  );
};

export default FormDeleteItem;
