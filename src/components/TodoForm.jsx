import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle("");
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div style={styles.container}>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type="text"
          placeholder="Add your Todo"
          style={styles.formInput}
          onChange={(event) => {
            handleChangeTitle(event);
          }}
          value={title}
        />
        <button style={styles.button}>Add Todo</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: "32px",
  },
  formInput: {
    border: "none",
    marginRight: "12px",
    borderRadius: "12px",
    width: "40%",
    fontSize: "16px",
    padding: "12px 16px",
  },
  button: {
    border: "none",
    padding: "12px 18px",
    borderRadius: "12px",
    fontSize: "16px",
    color: "white",
    backgroundColor: "#615EFC",
  },
};

export default TodoForm;
