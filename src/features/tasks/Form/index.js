import React, { useRef, useState } from "react";
import { StyledForm, FormInput, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(newTaskContent.trim() !== "") {addNewTask(newTaskContent.trim());};        
        setNewTaskContent("");
    }

    const ref = useRef(null);

    const handleClick = () => {
        ref.current.focus();
    };

    return (
        <StyledForm
            onSubmit={onFormSubmit}>
            <FormInput
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                ref={ref}
            />
            <FormButton
                onClick={handleClick}
            >
                Dodaj zadanie
            </FormButton>
        </StyledForm>
    );
};

export default Form;