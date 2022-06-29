import "./style.css";
import { useState } from "react";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTakContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTakContent("");
    }

    return (
        <form
            className="form"
            onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__inputBox"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTakContent(target.value)}
            />
            <button
                className="form__button">
                Dodaj zadanie
            </button>
        </form>
    );
};

export default Form;