import "./style.css";
import React, { useRef, useState } from "react";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    }

    const ref = useRef(null);

    const handleClick = () => {
        ref.current.focus();
    };

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__inputBox"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={ref}
            />
            <button
                className="form__button"
                onClick={handleClick}
            >
                Dodaj zadanie
            </button>
        </form>
    );
};

export default Form;